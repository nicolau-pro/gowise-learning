import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Parents from "./pages/Parents";
import Tutors from "./pages/Tutors";
import Schools from "./pages/Schools";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Paths from "paths";

import { useAppState } from "./AppStateContext";
import { RouteChangeListener } from "./RouteChangeListener";

function AppLoader() {
  const { setCurrentPath } = useAppState();

  const handlePathChange = (path) => {
    setCurrentPath(path.split("/")[1]);
  };

  return (
    <BrowserRouter>
      <RouteChangeListener onPathChange={handlePathChange} />
      <Routes>
        <Route path={Paths.HOME} element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path={Paths.PARENTS}>
            <Route index element={<Parents />} />
          </Route>
          <Route path={Paths.TUTORS}>
            <Route index element={<Tutors />} />
          </Route>
          <Route path={Paths.SCHOOLS_AND_LOCAL_AUTORITIES}>
            <Route index element={<Schools />} />
          </Route>
          <Route path={Paths.ABOUT}>
            <Route index element={<About />} />
          </Route>
          <Route path={Paths.CONTACT}>
            <Route index element={<Contact />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppLoader;
