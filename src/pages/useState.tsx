import { Outlet } from "react-router-dom";
import { NavBar } from "../components/nav/navBar";
import { navLight } from "../utils/design";
import { Button } from "../components/buttons/btn-count";
import Counter from "../components/use-state/counter";
import { useState } from "react";

export default function Interactif() {
  const [exo, setExo] = useState<string>("");
  let component: any;
  const linksNav = [
    { path: "counter", name: "Counter" },
    { path: "person", name: "Personne" },
  ];

  function handleChange(name: string) {
    setExo(name);

    switch (name.toLocaleLowerCase()) {
      case "counter":
        component = <Counter />;
        break;

      default:
        break;
    }
    return component;
  }
  const buttons = linksNav.map((link) => (
    <Button
      key={link.name}
      onClick={() => handleChange(link.name)}
      value={link.name}
    />
  ));

  return (
    <>
      <h1>Ajouter de l’interactivité</h1>
      {buttons}
      {component}
      {/* <NavBar props={[...linksNav]} className={navLight} /> */}

      <article>
        <div className="container">
          <h3>L’état : la mémoire d’un composant</h3>
          <p>
            Les composants ont souvent besoin de modifier ce qui est affiché à
            l’écran en réponse à une interaction. Par exemple, saisir du texte
            dans un formulaire devrait mettre à jour le champ de saisie, cliquer
            sur « suivant » dans un carrousel d’images devrait changer l’image
            affichée, cliquer sur « acheter » ajoute un produit au panier
            d’achats. Les composants ont besoin de « se souvenir » de certaines
            choses : la valeur saisie, l’image active, le panier d’achats. En
            React, ce type de mémoire spécifique au composant est appelé état.
          </p>
          <p>
            Vous pouvez ajouter un état à un composant avec un Hook useState.
            Les Hooks sont des fonctions spéciales qui permettent à vos
            composants d’utiliser des fonctionnalités de React (l’état en est
            une). Le Hook useState vous permet de déclarer une variable d’état.
            Il prend l’état initial en argument et renvoie une paire de valeurs
            : l’état actuel et une fonction qui vous permet de le modifier.
          </p>
        </div>
      </article>
    </>
  );
}
