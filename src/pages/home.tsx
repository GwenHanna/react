import { NavBar } from "../components/nav/navBar";
import { flexColumn, navLight } from "../utils/design";

export default function Home() {
  const linksNav = [{ path: "/exo", name: "Exo" }];
  return (
    <>
      <h1>react</h1>

      <div className={flexColumn} style={{ width: "15%" }}>
        <NavBar props={[...linksNav]} className={navLight} />
      </div>
    </>
  );
}
