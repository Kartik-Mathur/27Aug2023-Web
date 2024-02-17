import React, { createContext } from "react";
import Parent from "./Parent";

let data = "I am Grandparent";
let myInfo = "I have Parent as my Child Component";

const MyContext = createContext(data);
const AnotherContext = createContext(myInfo);

const GrandParent = () => {
  return (
    <MyContext.Provider value={data}>
      <AnotherContext.Provider value={myInfo}>
        <Parent />
      </AnotherContext.Provider>
    </MyContext.Provider>
  );
};

export default GrandParent;
export { MyContext, AnotherContext };
