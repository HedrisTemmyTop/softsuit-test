import type { PathRouteProps } from "react-router-dom";
import ElementPage from "./../pages/Element";
import ElementLinksPage from "./../pages/ElementLinks";

export const routes: Array<PathRouteProps> = [
  {
    path: "/elements",
    element: <ElementPage />,
  },
  {
    path: "/elements/:id",
    element: <ElementLinksPage />,
  },
];
