import React, { useReducer } from "react";
import ApiFetch from "./components/09_ApiFetch";
import AppContext from "./contexts/AppContext";
import B from "./components/10_useContext/B";

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "add_1":
      return currentState + 1;
    case "multiple_3":
      return currentState * 3;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{ countProvided: count, dispatchProvided: dispatch }}
    >
      <ApiFetch />
      <hr />
      <B />
      <p>count: {count}</p>
    </AppContext.Provider>
  );
};

export default App;
