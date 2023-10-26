"use client"
import { useState, useEffect } from "react";
import Form from "./components/Form";

interface Movie {
  title: string;
  date: string;
}

const getMovies = async () => {
  try {
    const res = await fetch('/api/movies')
    if (!res.ok) {
      throw new Error('Failed to get movies.');
    }
    return res.json()
  }
  catch (error) {
    console.log('Error loading movies: ', error)
  }
}

export default function Home() {

  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    const fetchedData = await getMovies();
    setMovies(fetchedData.movies);
  };

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <p className='m-12'>Add movies and the dates you watched them!</p>
      <div>
        <Form />
      </div>
    </main>
  )
}
