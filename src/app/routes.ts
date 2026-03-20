import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import HomeNew from "./pages/HomeNew";
import Historia from "./pages/Historia";
import Actividades from "./pages/Actividades";
import Informacion from "./pages/Informacion";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomeNew,
      },
      {
        path: "historia",
        Component: Historia,
      },
      {
        path: "actividades",
        Component: Actividades,
      },
      {
        path: "informacion",
        Component: Informacion,
      },
      {
        path: "nosotros",
        Component: Nosotros,
      },
      {
        path: "contacto",
        Component: Contacto,
      },
    ],
  },
]);