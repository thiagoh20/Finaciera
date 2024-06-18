import { useRoutes, BrowserRouter } from "react-router-dom";

import Home from "../Home";
import Movement from "../Movement";
import NotFound from "../NotFound";
import Navbar from "../../Components/Navbar";

import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/finaciera", element: <Movement /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
