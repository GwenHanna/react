import { createBrowserRouter } from "react-router-dom";
import UseEffect from "../pages/useEffect";
import Header from "../components/header/header";
import Home from "../pages/home";
import Counter from "../components/use-state/counter";
import Person from "../components/use-state/person";
import Morpion from "../pages/morpion";
import UseMemo from "../pages/useMemo";
import UseRef from "../pages/useRef";
import Exo from "../pages/exo";
import ListComposant from "../components/list/list";
import Interactif from "../pages/useState";

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
        path: "exo",
        element: <Exo />,
        children: [
          {
            path: "list",
            element: <ListComposant />,
          },
        ],
      },
      {
        path: "morpion",
        element: <Morpion />,
      },
      {
        path: "interactif",
        element: <Interactif />,
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
      {
        path: "use-memo",
        element: <UseMemo />,
      },
      {
        path: "use-ref",
        element: <UseRef />,
      },
    ],
  },
]);
