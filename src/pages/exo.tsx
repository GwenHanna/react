import { Outlet } from "react-router-dom";
import { NavBar } from "../components/nav/navBar";
import { flexColumn, navLight } from "../utils/design";

export default function Exo() {
  const linksNav = [{ path: "list", name: "List Composant" }];
  return (
    <>
      <h1>Exo</h1>
      <div className="d-flex">
        <div className={flexColumn} style={{ width: "15%" }}>
          <NavBar props={[...linksNav]} className={navLight} />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
