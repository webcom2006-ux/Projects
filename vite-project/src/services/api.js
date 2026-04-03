export async function fetchBooks({ topic = '', pageUrl = '' }) {
  let url = pageUrl || `https://gutendex.com/books/?languages=en&page_size=7`;

  if (!pageUrl && topic) {
    url += `&topic=${topic}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  if (!pageUrl && data.results.length > 7) {
    data.results = data.results.slice(0, 7);
  }

  return data;
}

export function getBookUrl(formats) {
  return (
    formats['text/html'] ||
    formats['application/pdf'] ||
    formats['text/plain'] ||
    null
  );
}