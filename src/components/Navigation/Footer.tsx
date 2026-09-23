import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin } from 'lucide-react';
import { SERVICES } from '../../utils/services';
import { CONTACT_EMAIL, INSTAGRAM_URL } from '../../config';

const NAV_LINKS = [
  { id: 'home', to: '/#top' },
  { id: 'about', to: '/#about' },
  { id: 'gallery', to: '/gallery' },
];

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Footer = () => {
  const { t } = useTranslation(['nav', 'footer', 'services']);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt={t('nav:brand')}
              className="w-9 h-9 rounded-full object-cover"
            />
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-[0.2em] text-gray-900 uppercase">
                {t('nav:brand')}
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-gray-500 uppercase">
                {t('nav:tagline')}
              </span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-gray-600 max-w-xs">{t('footer:blurb')}</p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">
            {t('footer:linksHeading')}
          </p>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.to}
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  {t(`nav:links.${link.id}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">
            {t('footer:servicesHeading')}
          </p>
          <ul className="space-y-3">
            {SERVICES.map((service) => (
              <li key={service.id}>
                <Link
                  to={`/services/${service.slug}`}
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  {t(`services:items.${service.id}.title`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">
            {t('footer:contactHeading')}
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
              >
                <Mail size={16} className="flex-shrink-0" />
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
              >
                <InstagramIcon />
                {t('footer:instagramHandle')}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin size={16} className="flex-shrink-0" />
              {t('footer:location')}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 text-xs text-gray-500">
          {t('footer:copyright', { year })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
