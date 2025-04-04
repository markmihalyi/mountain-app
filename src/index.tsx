import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style.css";

import { FunctionComponent, render } from "preact";
import { LocationProvider, Route, Router } from "preact-iso";

import { DataContextProvider } from "./common/providers/DataProvider/index.js";
import { ModalContextProvider } from "./common/providers/ModalProvider/index.js";
import EditMountain from "./pages/EditMountain.js";
import Home from "./pages/Home.js";
import Mountain from "./pages/Mountain.js";
import NewMountain from "./pages/NewMountain.js";
import NotFound from "./pages/_404.jsx";
import { Page } from "./types.js";

const pages: Array<Page> = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/mountains/new",
    component: NewMountain,
  },
  {
    path: "/mountains/:id",
    component: Mountain,
  },
  {
    path: "/mountains/:id/edit",
    component: EditMountain,
  },
];

const App: FunctionComponent = () => {
  return (
    <LocationProvider>
      <DataContextProvider>
        <ModalContextProvider>
          <Router>
            {pages.map(({ path, component }) => (
              <Route path={path} component={component} />
            ))}
            <Route default component={NotFound} />
          </Router>
        </ModalContextProvider>
      </DataContextProvider>
    </LocationProvider>
  );
};

render(<App />, document.getElementById("app"));
