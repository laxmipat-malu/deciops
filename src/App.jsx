import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import PageFrame from './components/PageFrame';
import JoinTheTeam from './components/JoinTheTeam';

const pages = [
  { path: '/', file: 'platform.html', title: 'Home' },
  { path: '/platform', file: 'home.html', title: 'Platform' },
  { path: '/how-it-works', file: 'how-it-works.html', title: 'How It Works' },
  { path: '/use-cases', file: 'use-cases.html', title: 'Use Cases' },
  { path: '/missing-layer', file: 'missing-layer.html', title: 'The Missing Layer' },
  { path: '/execution-library', file: 'execution-library.html', title: 'Execution Library' },
  {
    path: '/execution-library/backorder-resolved-minutes',
    file: 'reports/backorder-resolved-minutes.html',
    title: 'Backorder Resolved in Minutes',
  },
  {
    path: '/execution-library/demand-spike-managed',
    file: 'reports/demand-spike-managed.html',
    title: 'Demand Spike Managed',
  },
  {
    path: '/execution-library/pre-expiry-reallocated',
    file: 'reports/pre-expiry-reallocated.html',
    title: 'Pre-Expiry Reallocated',
  },
  { path: '/about', file: 'about.html', title: 'About' },
  { path: '/request-demo', file: 'request-demo.html', title: 'Request for Demo' },
  { path: '/terms', file: 'terms.html', title: 'Terms of Use' },
  { path: '/privacy', file: 'privacy.html', title: 'Privacy Policy' },
  { path: '/cookies', file: 'cookies.html', title: 'Cookies Policy' },
];

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/join-the-team" element={<JoinTheTeam />} />
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
