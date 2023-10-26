"use client"
import { useState, useEffect } from "react";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  )
}
