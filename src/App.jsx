import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import PageFrame from './components/PageFrame';

const pages = [
  { path: '/', file: 'home.html', title: 'Home' },
  { path: '/platform', file: 'platform.html', title: 'Platform' },
  { path: '/how-it-works', file: 'how-it-works.html', title: 'How It Works' },
  { path: '/use-cases', file: 'use-cases.html', title: 'Use Cases' },
  { path: '/missing-layer', file: 'missing-layer.html', title: 'The Missing Layer' },
  { path: '/execution-library', file: 'execution-library.html', title: 'Execution Library' },
  { path: '/about', file: 'about.html', title: 'About' },
  { path: '/terms', file: 'terms.html', title: 'Terms of Use' },
  { path: '/privacy', file: 'privacy.html', title: 'Privacy Policy' },
  { path: '/cookies', file: 'cookies.html', title: 'Cookies Policy' },
];

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {pages.map((p) => (
            <Route
              key={p.path}
              path={p.path}
              element={<PageFrame src={`/pages/${p.file}`} title={p.title} />}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
