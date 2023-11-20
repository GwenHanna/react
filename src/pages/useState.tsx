import Nav from "../components/nav/nav";
import { Outlet } from "react-router-dom";

export default function UseState() {
  return (
    <div>
      <Nav />
      <h1>useState</h1>

      <Outlet />
    </div>
  );
}
