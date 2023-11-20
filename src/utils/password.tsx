export function passwordSecurity(password: string): string {
  if (password.length < 8) {
    return "Votre mot de passe dois contenir 8 caractères minimums !";
  }
  if (!password.match(/^(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).*$/)) {
    return "Votre mot de passe dois contenir 1 chiffre et 1 Symbol minimums !";
  }
  if (!password.match(/^(?=.*[A-Z]).*$/)) {
    return "Votre mot de passe dois contenir 1 Majuscule !";
  }

  return "Fort";
}
