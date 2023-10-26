interface MovieCardProps {
  title: string;
  date: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, date }) => {
  return (
    <div>
      <p>Movie: {title}</p>
      <p>Date: {date}</p>
    </div>
  )
}

export default MovieCard;