import { Outlet } from "react-router-dom";
import { NavBar } from "../nav/navBar";

export default function Header() {
  const linksNav = [
    { path: "/home", name: "Home" },
    { path: "/interactif", name: "Ajouter de l’interactivité" },
    { path: "/use-effect", name: "Use Effect" },
    { path: "/use-memo", name: "Use Memo" },
    { path: "/use-ref", name: "Use Ref" },
  ];

  return (
    <header>
      <NavBar props={[...linksNav]} />
      <Outlet />
    </header>
  );
}
