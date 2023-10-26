interface MovieCardProps {
  title: string;
  date: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, date }) => {

  const formattedDate = new Date(date).toLocaleDateString();
  return (
    <div>
      <p>Movie: {title}</p>
      <p>Watched: {formattedDate}</p>
    </div>
  )
}

export default MovieCard;