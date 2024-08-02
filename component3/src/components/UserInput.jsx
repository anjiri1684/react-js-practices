import { useState } from "react";

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            required
            value={userInput.initialInvestment}
            onChange={(event) => onChange("initialInvestment", event)}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            id="annualInvestment"
            required
            value={userInput.annualInvestment}
            onChange={(event) => onChange("annualInvestment", event)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            id="expectedReturn"
            required
            value={userInput.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event)}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            required
            value={userInput.duration}
            onChange={(event) => onChange("duration", event)}
          />
        </p>
      </div>
    </section>
  );
}
