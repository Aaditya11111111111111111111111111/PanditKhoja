import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../pages/Layouts/MainLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Pandits from "../pages/Pandits/Pandits";
import PanditDetails from "../pages/PanditDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "pandits",
        element: <Pandits />,
      },
      {
        path: "pandits/:id",
        element: <PanditDetails />,
      },
    ],
  },
]);

export default router;