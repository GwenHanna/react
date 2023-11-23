import { NavLink } from "react-router-dom";
import { navDark } from "../../utils/design";

interface itemNavInterface {
  path: string;
  name: string;
}
interface propsNavInterface {
  props: itemNavInterface[];
  className?: string;
}

export function NavBar({ props, className = navDark }: propsNavInterface) {
  return (
    <nav className={className}>
      {props.map((item) => (
        <NavLink className="navbar-brand" to={item.path} key={item.path}>
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}
