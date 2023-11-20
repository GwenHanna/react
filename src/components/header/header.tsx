import { Outlet } from "react-router-dom";
import { NavBar } from "../nav/navBar";

export default function Header() {
  return (
    <header>
      <NavBar />
      <Outlet />
    </header>
  );
}
