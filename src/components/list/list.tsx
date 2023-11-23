import tableauImage from "../../screen/tableau.png";
import mapImage from "../../screen/map.png";
import filterImage from "../../screen/filter.png";
import peopleImage from "../../screen/people.png";

import PeopleFirst from "./components/peopleFirst";
import PeopleSecond from "./components/peopleSecond";
import PeaopleComplet from "./components/peopleComplet";

export default function ListComposant() {
  return (
    <div>
      <h3>Liste de composants</h3>
      <p>
        Génerer une liste d'éléments a partir d'un tableaux avec
        <code>map()</code>.
      </p>
      <img src={tableauImage} alt="tableau" />
      <p>La méthode map : </p>
      <img src={mapImage} alt="map" />
      <ol>
        <PeopleFirst />
      </ol>
      <p>
        Filtrer un tableau avec <code>filter()</code> :
      </p>
      <img src={peopleImage} alt="tableau peaple" />
      <p>La méthode filter : </p>
      <img src={filterImage} alt="filter" />
      <div className="card">
        <h6>Chimiste</h6>
        <PeopleSecond />
      </div>
      <h3>La key</h3>
      <p>
        Vous devez fournir à chaque élément de tableau une key — une chaîne de
        caractères ou un nombre qui identifie de façon unique cet élément au
        sein du tableau :
      </p>
      <img src={""} alt="key.png" />
      <p className="alert alert-success">
        Remarque Les éléments JSX directement au sein d’un appel à map() ont
        toujours besoin de clés !
      </p>
      <h6>Où récupérer la key</h6>
      <p>
        Selon la source de vos données, vous aurez différentes sources de clés :
      </p>
      <ul>
        <li>
          Données issues d’une base de données : si vos données viennent d’une
          base de données, vous pouvez utiliser les clés / ID de la base, qui
          sont uniques par nature.
        </li>
        <li>
          Données générées localement : si vos données sont générées et
          persistées localement (ex. une appli de prise de notes), utilisez un
          compteur incrémentiel,{" "}
          <a
            style={{ textDecoration: "none" }}
            href="https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID"
            target="blank"
          >
            <code>crypto.randomUUID()</code>
          </a>{" "}
          ou un module du style{" "}
          <a
            style={{ textDecoration: "none" }}
            href="https://www.npmjs.com/package/uuid"
            target="blank"
          >
            uuid
          </a>{" "}
          en créant vos éléments.
        </li>
      </ul>
      <PeaopleComplet />
    </div>
  );
}
