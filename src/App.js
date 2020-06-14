import React from "react";
import ApiFetch from "./components/09_ApiFetch";
import AppContext from "./contexts/AppContext";
import B from "./components/10_useContext/B";

const App = () => {
  return (
    <AppContext.Provider value={"value from App.js"}>
      <>
        <ApiFetch />
      </>
      <B />
    </AppContext.Provider>
  );
};

export default App;
