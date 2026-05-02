import { Link } from 'react-router-dom';

const company = [
  { to: '/', label: 'Home' },
  { to: '/platform', label: 'Platform' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/use-cases', label: 'Use Cases' },
  { to: '/missing-layer', label: 'The Missing Layer' },
  { to: '/execution-library', label: 'Execution Library' },
  { to: '/about', label: 'About' },
];

const legal = [
  { to: '/terms', label: 'Terms of Use' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/cookies', label: 'Cookies Policy' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-stone-300 w-full px-12 py-20 border-t border-stone-800">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="font-display text-2xl font-semibold text-white mb-4">
              DeciOps<span className="align-super text-[0.65rem] text-[#E8654A]">™</span>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-stone-400 leading-relaxed">
              Execution layer for supply chains.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#E8654A] mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-stone-300 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#E8654A] mb-5">Legal</h4>
            <ul className="space-y-3">
              {legal.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-stone-300 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#E8654A] mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-stone-300">
              <li>
                <div className="text-stone-400 text-xs uppercase tracking-wider mb-1">Address</div>
                <div>1 Decision Lane<br />New York, NY 10013</div>
              </li>
              <li>
                <a href="mailto:info@deciops.ai" className="hover:text-white">info@deciops.ai</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="font-mono text-[11px] uppercase tracking-widest text-stone-500">
            DeciOps™ — Execution Layer for Supply Chains
          </div>
          <div className="font-mono text-[11px] text-stone-500">
            © {new Date().getFullYear()} DeciOps. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
