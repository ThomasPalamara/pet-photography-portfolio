import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import PageLayout from './PageLayout';
import Home from './pages/Home';
import GalleryPage from './pages/Gallery';
import ContactPage from './pages/Contact';
import PetPortraits from './pages/services/PetPortraits';
import PuppySessions from './pages/services/PuppySessions';
import MultiPetSessions from './pages/services/MultiPetSessions';
import NotFound from './pages/NotFound';

export const routes = (
  <Route element={<PageLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/gallery" element={<GalleryPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/services/pet-portraits" element={<PetPortraits />} />
    <Route path="/services/puppy-sessions" element={<PuppySessions />} />
    <Route path="/services/multi-pet-sessions" element={<MultiPetSessions />} />
    <Route path="*" element={<NotFound />} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(routes));

export default router;
