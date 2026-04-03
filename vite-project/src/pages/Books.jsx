import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBooks } from '../services/api';
import { BookCard } from '../components/BookCard.jsx';
import { SearchInput } from '../components/SearchInput.jsx';

export function BooksPage() {
  const { topic } = useParams();
  const [books, setBooks] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);

  const title = useMemo(() => (topic ? topic.charAt(0).toUpperCase() + topic.slice(1) : 'Books'), [topic]);

  const loadBooks = async (reset = false) => {
    if (loading) return;
    setLoading(true);
    try {
      const data = await fetchBooks({ topic, pageUrl: reset ? '' : nextPage });
      console.log('Fetched books:', data.results.length, 'for topic:', topic);
      setNextPage(data.next || '');
      setBooks((prev) => (reset ? data.results : [...prev, ...data.results]));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBooks(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic]);

  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && nextPage && !loading) {
        loadBooks();
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPage, loading]);

  return (
    <div className="container">
      <h1>{title}</h1>
      <SearchInput onSearch={(value) => setSearchText(value)} />
      <div className="grid">
        {books
          .filter((b) => {
            const hasImage = b.formats['image/jpeg'];
            const matchesSearch = searchText === '' ||
              b.title.toLowerCase().includes(searchText.toLowerCase()) ||
              b.authors.some(a => a.name.toLowerCase().includes(searchText.toLowerCase()));
            return hasImage && matchesSearch;
          })
          .map((book) => <BookCard key={book.id || book.title} book={book} />)}
      </div>
      {loading && <div style={{ padding: '20px' }}>Loading...</div>}
    </div>
  );
}