import { Outlet } from "react-router-dom";
import { NavBar } from "./navBar";

export default function Header() {
  return (
    <header>
      <NavBar />
      <Outlet />
    </header>
  );
}
