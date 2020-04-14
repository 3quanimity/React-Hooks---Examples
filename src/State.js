// useState allows us to make our components stateful. Whereas this previously required using a class component, 
// hooks give us the ability to write it using just functions. It allows us to have more flexible components. 
// In our example component, everytime you click on the h1 (bad a11y, by the way) it'll change colors. 
// It's doing this by keeping that bit of state in a hook which is being fed in anew every render so it always has the latest state.
import React, { useState } from "react";

const StateComponent = () => {
  const [isGreen, setIsGreen] = useState(true);

  return (
    <h1
      onClick={() => setIsGreen(!isGreen)}
      style={{ color: isGreen ? "limegreen" : "crimson" }}
    >
      useState Example
    </h1>
  );
};

export default StateComponent;
