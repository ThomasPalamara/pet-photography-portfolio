import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const NotFound = () => {
  const { t } = useTranslation('notFound');

  return (
    <section className="max-w-2xl mx-auto px-6 md:px-12 py-32 text-center">
      <p className="text-xs font-semibold tracking-widest text-gray-500 mb-2 uppercase">
        {t('eyebrow')}
      </p>
      <h1 className="font-serif text-3xl md:text-4xl text-gray-900">
        {t('heading')}
      </h1>
      <p className="mt-4 text-gray-600">{t('paragraph')}</p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <Button href="/">{t('backHome')}</Button>
        <Link
          to="/contact"
          className="text-sm font-semibold text-gray-900 hover:opacity-70 transition-opacity"
        >
          {t('contact')}
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
