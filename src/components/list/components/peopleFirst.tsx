import { peopleFirstArray } from "../dataPeaple";

export default function PeopleFirst() {
  const listPeople = peopleFirstArray.map((people) => (
    <li key={people}>{people}</li>
  ));

  return <>{listPeople}</>;
}
