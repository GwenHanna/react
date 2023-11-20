import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to={"/home"}>
        home
      </NavLink>
      <NavLink className="navbar-brand" to={"/morpion"}>
        morpion
      </NavLink>
      <NavLink className="navbar-brand" to={"/use-state"}>
        useState
      </NavLink>
      <NavLink className="navbar-brand" to={"/use-effect"}>
        useEffect
      </NavLink>
      <NavLink className="navbar-brand" to={"/use-memo"}>
        useMemo
      </NavLink>
      <NavLink className="navbar-brand" to={"/use-ref"}>
        useRef
      </NavLink>
    </nav>
  );
}
