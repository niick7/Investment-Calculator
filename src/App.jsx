import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvesment: 10000,
    annualInvesment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange({ inputIdentifier, newValue }) {
    setUserInputs((prevInputs) => {
      return {
        ...prevInputs,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInputs={userInputs} onChange={handleChange} />
      <Result userInputs={userInputs} />
    </>
  );
}

export default App;
