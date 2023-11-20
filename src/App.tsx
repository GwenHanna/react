import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import "./App.css";
import { Input } from "./components/form/input";
import { Checkbox } from "./components/form/checkbox";
import { Button } from "./components/buttons/btn-count";
import { log } from "console";
import { routerConfig } from "./utils/router";
import { Outlet, RouterProvider } from "react-router-dom";

function App() {
  const router: any = routerConfig;
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const originTitle = document.title;

    return () => {
      document.title = originTitle;
    };
  }, []);

  useEffect(() => {
    document.title = title; // Met à jour le titre de la page lorsque le titre du composant change
  }, [title]);

  // useEffect(() => {
  //   const handle = () => {
  //     setScroll(window.scrollY);
  //     console.log("scroll");
  //   };
  //   window.addEventListener("scroll", handle);

  //   return () => {
  //     window.removeEventListener("scroll", handle);
  //   };
  // }, []);

  // function handleChange(e: ChangeEvent<HTMLInputElement>) {
  //   let idAttribute: string = e.target.id;
  //   let value: string = e.target.value;

  //   switch (idAttribute) {
  //     case "prenom":
  //       setFirstname(value);
  //       break;
  //     case "nom":
  //       setLastname(value);
  //       break;
  //     case "counter":
  //       setDuration(Number(value));
  //       setSecondLeft(Number(value));
  //       break;
  //     case "title":
  //       setTitle(value);
  //       break;

  //     default:
  //       break;
  //   }
  // }
  const [checked, setChecked] = useState<boolean>(false);
  function handleClick(e: ChangeEvent<HTMLInputElement>) {
    setChecked(!checked);
  }

  const [duration, setDuration] = useState<number>(5);
  const [secondeLeft, setSecondLeft] = useState<number>(duration);
  useEffect(() => {
    let timer = window.setInterval(() => {
      setSecondLeft((v: number): number => {
        if (v <= 1) {
          clearInterval(timer);
          return 0;
        } else {
          return v - 1;
        }
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [duration]);

  useEffect(() => {
    setSecondLeft(duration);
  }, [duration]);

  const [password, setPassword] = useState<string>("MotDePasse1!");

  let security: any = useMemo(() => {
    console.log("pass");
  }, [password]);

  // USE EFFECT
  function passwordSecurity(password: any) {
    // Vérifier la longueur minimale
    if (password.length > 0) {
      if (password.length < 8) {
        return "Le mot de passe doit contenir au moins 8 caractères.";
      }

      // Vérifier la présence de chiffres
      if (!/\d/.test(password)) {
        return "Le mot de passe doit contenir au moins un chiffre.";
      }

      // Vérifier la présence de caractères spéciaux
      if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
        return "Le mot de passe doit contenir au moins un caractère spécial.";
      }
      // La validation a réussi
      return "Le mot de passe est sécurisé.";
    }
  }

  return <RouterProvider router={router} />;
}

export default App;
