import { Helmet } from 'react-helmet-async';
import { BRAND_NAME, SITE_URL } from '../config';

type SeoProps = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

const Seo = ({ title, description, path, noindex = false }: SeoProps) => {
  const fullTitle = `${title} | ${BRAND_NAME}`;
  const url = `${SITE_URL}${path}`;
  const image = `${SITE_URL}/logo.png`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={BRAND_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
