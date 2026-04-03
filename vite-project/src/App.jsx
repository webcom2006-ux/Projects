import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/Home').then(m => ({ default: m.HomePage })));
const BooksPage = lazy(() => import('./pages/Books').then(m => ({ default: m.BooksPage })));

function Loader() {
  return <div style={{ padding: '20px' }}>Loading...</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books/:topic" element={<BooksPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;