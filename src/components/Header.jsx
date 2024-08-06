import mainLogo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={mainLogo} alt="main logo" />
      <h1>Invesment Calculator</h1>
    </header>
  );
}