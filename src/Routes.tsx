import { useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "./App.tsx";

const Inputs = lazy(() => import("./features/inputs"));

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/inputs",
      element: (
        <Suspense fallback={<div>...Loading</div>}>
          <Inputs />
        </Suspense>
      ),
    },
  ]);
};

export default Routes;
