import { NavLink, Link } from 'react-router-dom';

const links = [
  { to: '/platform', label: 'Platform' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/use-cases', label: 'Use Cases' },
  { to: '/missing-layer', label: 'The Missing Layer' },
  { to: '/execution-library', label: 'Execution Library' },
  { to: '/about', label: 'About' },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-stone-900/85 backdrop-blur-md border-b border-stone-800">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-8">
        <Link to="/" className="font-display text-[1.4rem] font-semibold tracking-tight text-white">
          DeciOps<span className="align-super text-[0.6rem] text-[#E8654A]">™</span>
        </Link>
        <ul className="flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `font-label text-[13px] tracking-wide uppercase transition-colors ${
                    isActive ? 'text-[#E8654A]' : 'text-stone-300 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link
          to="/platform"
          className="font-label text-[13px] uppercase tracking-wide bg-gradient-to-r from-[#a5351e] to-[#c74d34] text-white px-5 py-2.5 rounded-md hover:opacity-90"
        >
          Request Access
        </Link>
      </div>
    </nav>
  );
}
