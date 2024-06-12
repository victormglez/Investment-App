import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Table from "./components/Table";

import "./index.css";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100,
    annualInvestment: 15000,
    expectedReturn: 60,
    duration: 10,
  });

  const isValid = userInput.duration >= 1;
  let errorMsg = (
    <p className="center">
      Please enter a valid duration, must be greater than zero.
    </p>
  );

  const handleChange = (newValue, inputIdentifier) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, //establecemos que la propiedad de ese nombre que se almacena
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />

      {isValid ? <Table userInput={userInput} /> : errorMsg}
    </>
  );
}

export default App;
