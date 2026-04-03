import { useNavigate } from 'react-router-dom';

export function GenreCard({ genre }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/books/${genre.toLowerCase()}`)}>
      {genre}
    </div>
  );
}