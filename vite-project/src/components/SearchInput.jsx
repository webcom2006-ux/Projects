import { useState, useEffect } from 'react';

export function SearchInput({ onSearch }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(value);
    }, 500);

    return () => clearTimeout(timeout);
  }, [value, onSearch]);

  return (
    <input
      type="text"
      value={value}
      placeholder="Search books..."
      onChange={(e) => setValue(e.target.value)}
      className="search-input"
    />
  );
}