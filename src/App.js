import React, { createContext } from "react";
import ComA from './ComA';

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={"Mayank"}>
        <LastName.Provider value={"Patel"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export {FirstName, LastName}