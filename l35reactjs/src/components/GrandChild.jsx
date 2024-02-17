import React, { useContext } from "react";
import { AnotherContext, MyContext } from "./GrandParent";

const GrandChild = () => {
    const data = useContext(MyContext);
    const myInfo = useContext(AnotherContext);
    
    return <div>{data}, {myInfo}</div>
};

/*
const GrandChild = () => {
  return (
    <MyContext.Consumer>
      {(data) => {
        return <AnotherContext.Consumer>
          {(myInfo) => {
            return (
              <div>
                GrandChild ko pata chala data is {data}, {myInfo}
              </div>
            );
          }}
        </AnotherContext.Consumer>;
      }}
    </MyContext.Consumer>
  );
};
*/

export default GrandChild;
