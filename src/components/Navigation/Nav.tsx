import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Menu, X } from 'lucide-react';
import Button from '../Button';
import { SERVICES } from '../../utils/services';

const NAV_LINKS = [
  { id: 'home', to: '/#top' },
  { id: 'about', to: '/#about' },
];

const Nav = () => {
  const { t } = useTranslation(['nav', 'services']);
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20 gap-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt={t('nav:brand')}
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="leading-tight">
            <span className="block text-xs sm:text-sm font-semibold tracking-[0.12em] sm:tracking-[0.2em] text-gray-900 uppercase whitespace-nowrap">
              {t('nav:brand')}
            </span>
            <span className="hidden sm:block text-[10px] tracking-[0.25em] text-gray-500 uppercase">
              {t('nav:tagline')}
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 lg:gap-10 flex-shrink-0">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className="text-xs font-medium tracking-widest text-gray-700 hover:text-gray-900 transition-colors uppercase"
            >
              {t(`nav:links.${link.id}`)}
            </Link>
          ))}

          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              onClick={() => setIsServicesOpen((open) => !open)}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
              className="flex items-center gap-0.5 text-xs font-medium tracking-widest text-gray-700 hover:text-gray-900 transition-colors uppercase"
            >
              {t('nav:links.services')}
              <ChevronDown
                size={20}
                className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isServicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2">
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                    onClick={() => setIsServicesOpen(false)}
                    className="block px-4 py-2 text-xs font-medium tracking-wide text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                  >
                    {t(`services:items.${service.id}.title`)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/gallery"
            className="text-xs font-medium tracking-widest text-gray-700 hover:text-gray-900 transition-colors uppercase"
          >
            {t('nav:links.gallery')}
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button href="/contact" size="sm" className="uppercase whitespace-nowrap">
            <span className="sm:hidden">{t('nav:bookASessionShort')}</span>
            <span className="hidden sm:inline">{t('nav:bookASession')}</span>
          </Button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-label={t('nav:toggleMenu')}
            className="md:hidden text-gray-700 hover:text-gray-900 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-gray-50 px-6 py-6">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                to={link.to}
                className="py-2 text-sm font-medium tracking-widest text-gray-700 hover:text-gray-900 transition-colors uppercase"
              >
                {t(`nav:links.${link.id}`)}
              </Link>
            ))}

            <Link
              to="/gallery"
              className="py-2 text-sm font-medium tracking-widest text-gray-700 hover:text-gray-900 transition-colors uppercase"
            >
              {t('nav:links.gallery')}
            </Link>

            <p className="pt-4 pb-1 text-xs font-semibold tracking-widest text-gray-500 uppercase">
              {t('nav:links.services')}
            </p>
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="py-2 pl-2 text-sm text-gray-700 hover:text-primary transition-colors"
              >
                {t(`services:items.${service.id}.title`)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
