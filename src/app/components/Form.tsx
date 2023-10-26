import React, { useState } from "react";
import { Input } from '@nextui-org/react'
import Submit from "./Submit";

interface Movie {
  title: string;
  date: string;
}

interface FormProps {
  updateMovies: (newMovie: Movie) => void;
}

const Form: React.FC<FormProps> = ({ updateMovies }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
  })

  const handleMovieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      title: title,
    }))
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      date: date,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newMovie = { title: formData.title, date: formData.date };
        updateMovies(newMovie);
        setFormData({
          title: '',
          date: '',
        });
      } else {
        console.error('Failed to add movie');
      }
    } catch (error) {
      console.error('Error adding movie', error);
    }
  }

  return (
    <div className='flex flex-col items-center p-6'>
      <form className='flex w-full flex-wrap md:flex-nowrap gap-4 mb-12'>
        <Input
          labelPlacement='outside-left'
          type='text'
          label='Movie'
          value={formData.title}
          onChange={handleMovieChange}
        />
        <Input
          labelPlacement='outside-left'
          type='date'
          label='Date'
          value={formData.date}
          onChange={handleDateChange}
        />
        <Submit onSubmit={handleSubmit} />
      </form>
    </div>
  )
}

export default Form;