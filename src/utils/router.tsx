import { createBrowserRouter } from "react-router-dom";
import UseState from "../pages/useState";
import UseEffect from "../pages/useEffect";
import Header from "../components/header/header";
import Home from "../pages/home";
import Counter from "../components/use-state/counter";
import Person from "../components/use-state/person";

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
        children: [
          {
            path: "counter",
            element: <Counter />,
          },
          {
            path: "person",
            element: <Person />,
          },
        ],
      },
      {
        path: "use-effect",
        element: <UseEffect />,
      },
    ],
  },
]);
