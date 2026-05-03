import { Link } from 'react-router-dom';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/platform', label: 'Platform' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/use-cases', label: 'Use Cases' },
  { to: '/request-demo', label: 'Request Demo' },
];

const resources = [
  { to: '/missing-layer', label: 'The Missing Layer' },
  { to: '/execution-library', label: 'Execution Library' },
];

const aboutUs = [
  { to: '/about', label: 'About us' },
];

const legal = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/cookies', label: 'Cookies Policy' },
  { to: '/terms', label: 'Terms of Use' },
];

function FooterLink({ to, label }) {
  return (
    <Link to={to} className="text-base font-bold text-stone-700 transition-colors hover:text-stone-950">
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-200 bg-white px-6 py-14 text-stone-700 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link to="/" aria-label="DeciOPs.ai home" className="inline-flex">
              <img
                src="/deciops-logo.png"
                alt="DeciOPs.ai"
                className="h-10 w-auto"
              />
            </Link>
            <address className="mt-5 not-italic text-base font-semibold leading-7 text-stone-600">
              <strong className="block text-lg font-extrabold text-stone-950">Inferonix Systems Private Ltd</strong>
              Proworks, Om chambers<br />
              Indiranagar,<br />
              Bangalore 560038<br />
              <a href="mailto:info@deciops.ai" className="transition-colors hover:text-stone-950">
                Email: info@deciops.ai
              </a>
            </address>
          </div>

          <div>
            <h4 className="mb-5 inline-block border-b-2 border-[#ff6a2a] pb-2 font-display text-2xl font-extrabold text-stone-950">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={`${link.to}-${link.label}`}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 inline-block border-b-2 border-[#ff6a2a] pb-2 font-display text-2xl font-extrabold text-stone-950">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.to}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 inline-block border-b-2 border-[#ff6a2a] pb-2 font-display text-2xl font-extrabold text-stone-950">About Us</h4>
            <ul className="space-y-3">
              {aboutUs.map((link) => (
                <li key={link.to}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-stone-200 pt-6 text-sm font-semibold text-stone-600 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Inferonix Systems Pvt Ltd. All rights reserved.</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((link) => (
              <FooterLink key={link.to} {...link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
