import { useState } from "react";

export default function UserInput() {
  const [useInputs, setUserInputs] = useState({
    initialInvesment: 10000,
    annualInvesment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange({inputIdentifier, newValue}) {
    setUserInputs(prevInputs => {
      return {
        ...prevInputs,
        [inputIdentifier]: newValue
      }
    })
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required value={useInputs.initialInvesment} onChange={(event) => handleChange("initialInvestment", event.target.value)} />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required value={useInputs.annualInvesment} onChange={(event) => handleChange("annualInvestment", event.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required value={useInputs.expectedReturn} onChange={(event) => handleChange("expectedReturn", event.target.value)} />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required value={useInputs.duration} onChange={(event) => handleChange("duration", event.target.value)} />
        </p>
      </div>
    </section>
  );
}
