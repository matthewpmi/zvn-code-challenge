import React, { useState } from "react";
import { Input } from '@nextui-org/react'

interface Movie {
  title: String;
  date: String;
}

interface FormProps {
  updateMovies: (newMovie: Movie) => void;
}

const Form: React.FC<FormProps> = ({ updateMovies }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
  })

  return (
    <div className='flex flex-col items-center p-6'>
      <form className='flex w-full flex-wrap md:flex-nowrap gap-4 mb-12'>
        <Input
          labelPlacement='outside-left'
          type='text'
          label='Movie'
          value={formData.title}
        // onChange={handleMovieChange}
        />
        <Input
          labelPlacement='outside-left'
          type='date'
          label='Date'
          value={formData.date}
        // onChange={handleDateChange}
        />
        {/* <Submit onSubmit={handleSubmit} /> */}
      </form>
    </div>
  )
}

export default Form;