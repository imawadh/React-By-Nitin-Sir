import React from "react";
import ReactDOM from "react-dom";

const h1 = React.createElement("h1",{},"Welcome to the world of React");

// Access the root Element
const root = ReactDOM.createRoot(document.getElementById("root"));
// render the element
root.render(h1);
