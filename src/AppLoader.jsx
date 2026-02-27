import { BrowserRouter, Routes, Route } from 'react-router';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Parents from './pages/Parents';
import Tutors from './pages/Tutors';
import Schools from './pages/Schools';
import About from './pages/About';
import Contact from './pages/Contact';
import PoliciesSafeguarding from './pages/PoliciesSafeguarding';

import Paths from 'paths';

import { useAppState } from 'appState';
import { RouteChangeListener } from './RouteChangeListener';

function AppLoader() {
  const { setCurrentPath } = useAppState();

  const handlePathChange = (path) => {
    setCurrentPath(path.split('/')[1]);
  };

  return (
    <BrowserRouter>
      <RouteChangeListener onPathChange={handlePathChange} />

      <Routes>
        {/* Main layout */}
        <Route path={Paths.HOME} element={<Dashboard />}>
          <Route index element={<Home />} />

          <Route path={Paths.PARENTS} element={<Parents />} />
          <Route path={Paths.TUTORS} element={<Tutors />} />
          <Route path={Paths.SCHOOLS_AND_LOCAL_AUTORITIES} element={<Schools />} />
          <Route path={Paths.ABOUT} element={<About />} />
          <Route path={Paths.CONTACT} element={<Contact />} />
          <Route path={Paths.POLICIES_AND_SAFEGUARDING} element={<PoliciesSafeguarding />} />

          {/* 404 inside Dashboard */}
          <Route path="*" element={<NotFound />} />

          {/* static 404 for PreSite */}
          {import.meta.env.VITE_PRESITE && <Route path="/__presite_404" element={<NotFound />} />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppLoader;
