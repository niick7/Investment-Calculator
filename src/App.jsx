import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  let inputIsValid = true;
  if (userInputs.duration < 1) {
    inputIsValid = false;
  }

  function handleChange(inputIdentifier, newValue) {
    setUserInputs((prevInputs) => {
      return {
        ...prevInputs,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInputs={userInputs} handleChange={handleChange} />
      {inputIsValid && (
        <Result userInputs={userInputs} inputIsValid={inputIsValid} />
      )}
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
