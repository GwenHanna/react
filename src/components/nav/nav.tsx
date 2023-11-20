import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to={"counter"}>
        Counter
      </NavLink>
      <NavLink className="navbar-brand" to={"person"}>
        Personne
      </NavLink>
    </nav>
  );
}
