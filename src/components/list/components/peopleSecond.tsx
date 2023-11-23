import { peopleSecondArray } from "../dataPeaple";

export default function PeopleSecond() {
  const chimiste = peopleSecondArray.filter(
    (people) => people.profession === "chimiste"
  );
  const chimisteItem = chimiste.map((item) => <p key={item.id}>{item.name}</p>);

  return <>{chimisteItem}</>;
}
