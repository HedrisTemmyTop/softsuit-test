import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Layout from "../Layout/Index";

const Routings = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((routeProps) => (
          <Route {...routeProps} key={routeProps.path} />
        ))}
      </Route>
    </Routes>
  );
};

export default Routings;
