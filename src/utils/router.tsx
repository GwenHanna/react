import { Outlet, createBrowserRouter } from "react-router-dom";
import UseState from "../pages/useState";
import UseEffect from "../pages/useEffect";
import Header from "../components/header/header";
import Home from "../pages/home";

export const routerConfig: any = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
      </>
    ),
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "use-state",
        element: <UseState />,
      },
      {
        path: "use-effect",
        element: <UseEffect />,
      },
    ],
  },
]);
