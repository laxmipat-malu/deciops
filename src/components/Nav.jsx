import { NavLink, Link } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/platform', label: 'Platform' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/use-cases', label: 'Use Cases' },
  { to: '/missing-layer', label: 'The Missing Layer' },
  { to: '/execution-library', label: 'Execution Library' },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-stone-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-8">
        <Link to="/" className="flex shrink-0 items-center" aria-label="DeciOPs.ai home">
          <img
            src="/deciops-logo.png"
            alt="DeciOPs.ai"
            className="h-14 w-auto"
          />
        </Link>
        <ul className="flex items-center gap-6">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `font-label text-[16px] font-bold tracking-wide uppercase transition-colors ${
                    isActive ? 'text-[#E8654A]' : 'text-stone-700 hover:text-stone-950'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link
          to="/request-demo"
          className="font-label text-[15px] font-bold uppercase tracking-wide bg-gradient-to-r from-[#a5351e] to-[#c74d34] text-white px-6 py-3 rounded-md hover:opacity-90"
        >
          Request for Demo
        </Link>
      </div>
    </nav>
  );
}
