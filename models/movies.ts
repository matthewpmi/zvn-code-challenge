import mongoose, { Schema } from 'mongoose';

const movieSchema = new Schema(
  {
    title: String,
    date: Date,
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema);

export default Movie;