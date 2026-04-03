import { GenreCard } from '../components/GenreCard.jsx';

export function HomePage() {
  const genres = ['Fiction', 'Drama', 'Humour', 'Politics', 'Philosophy', 'History', 'Adventure'];

  return (
    <div className="container">
      <h1>Gutenberg Project</h1>
      <h2 className='subheading'>A social cataloging website that allows you to freely search its database of books,
annotations, and reviews.</h2>
      <div className="grid book-genre">
        {genres.map((genre) => (
          <GenreCard key={genre} genre={genre} />
        ))}
      </div>
    </div>
  );
}