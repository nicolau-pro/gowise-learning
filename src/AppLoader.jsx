import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Contact from "./pages/contact/Contact";

import { useAppState } from "./AppStateContext";
import { RouteChangeListener } from "./RouteChangeListener";

const rootPath = "/";

function AppLoader() {
  const { setCurrentPath } = useAppState();

  const handlePathChange = (path) => {
    setCurrentPath(path.split("/")[1]);
  };

  return (
    <BrowserRouter>
      <RouteChangeListener onPathChange={handlePathChange} />
      <Routes>
        <Route path={rootPath} element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="contact">
            <Route index element={<Contact />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppLoader;
