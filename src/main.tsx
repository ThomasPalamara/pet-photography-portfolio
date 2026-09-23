import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './i18n';
import 'tailwindcss/tailwind.css';
import './index.css';

import router from './router';
import { BRAND_NAME } from './config';

const app = createRoot(document.getElementById('root')!);

app.render(
  <StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>{BRAND_NAME}</title>
      </Helmet>
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  </StrictMode>
);
