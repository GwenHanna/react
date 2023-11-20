import { useState } from "react";
import { Button } from "../buttons/btn-count";
import { button } from "../../utils/design";
import { Input } from "../form/input";

export default function Person() {
  const [person, setPerson] = useState({
    firstname: "Gwen",
    lastname: "Garlet",
    age: 33,
  });

  const addYears = () => {
    // Créer une copie de l'objet person
    setPerson({ ...person, age: person.age + 1 });
  };
  const handleChange = (newFirstname: string) => {
    setPerson({
      ...person,
      firstname: newFirstname,
    });
  };

  return (
    <div>
      <h3>Personne</h3>
      <div>
        <Input
          label={"Prénom"}
          id="firstname"
          value={person.firstname}
          onChange={handleChange}
        />
      </div>
      <p>{person.firstname}</p>
      <p>{person.lastname}</p>
      <p>{person.age}</p>

      <Button
        classname={button.join(" ")}
        value={"Ajouter une année"}
        onClick={addYears}
      />
    </div>
  );
}
