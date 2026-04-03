import { getBookUrl } from '../services/api';

export function BookCard({ book }) {
  const formatUrl = book.formats['image/jpeg'];

  return (
    <div
      className="card"
      onClick={() => {
        const url = getBookUrl(book.formats);
        if (url) window.open(url, '_blank');
        else alert('No viewable version available');
      }}
    >
      <img src={formatUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.authors.map((a) => a.name).join(', ')}</p>
    </div>
  );
}