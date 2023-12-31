"use client"
import { useState, useEffect } from "react";
import Form from "./components/Form";
import MovieCard from "./components/MovieCard";

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

  const updateMovies = (newMovie: Movie) => {
    setMovies([...movies, newMovie])
  }

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <main className='flex min-h-screen flex-col items-center p-24 bg-slate-400'>
      <p className='m-12'>Add movies and the dates you watched them!</p>
      <div>
        <Form updateMovies={updateMovies} />
      </div>
      {movies.length > 0 ? (
        <div>
          {movies.map((movie, index) => (
            <MovieCard key={index} title={movie.title} date={movie.date} />
          ))}
        </div>
      ) : (
        <p>No movies added.</p>
      )}
    </main>
  )
}
