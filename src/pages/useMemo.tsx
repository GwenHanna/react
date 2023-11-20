import { useState } from "react";
import { Input } from "../components/form/input";
import { passwordSecurity } from "../utils/password";

export default function UseMemo() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const security = passwordSecurity(password);

  console.log(security);
  return (
    <>
      <h1>UseMemo</h1>

      <form action="">
        <Input
          label={"Mot de passe : "}
          onChange={setPassword}
          value={password}
        />
        <div>
          <p
            className={
              security !== "Fort" && password.length > 0
                ? "alert alert-danger"
                : ""
            }
          >
            {password && "Securité : " + security}
          </p>
        </div>
      </form>
    </>
  );
}
