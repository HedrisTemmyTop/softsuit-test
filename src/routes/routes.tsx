import React from "react";

import type { PathRouteProps } from "react-router-dom";
import ElementPage from "./../pages/Element";
import ElementLinksPage from "./../pages/ElementLinks";
// const ElementPage = React.lazy(() => import("./../pages/Element"));
// const ElementLinksPage = React.lazy(() => import("./../pages/ElementLinks"));

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
