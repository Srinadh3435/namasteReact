import React from "react";
import ReactDOM from "react-dom";

const heading2 = React.createElement("h1",{className:"red"},"This heading is from React")
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
const parent = React.createElement(
    "div",
    { id :"parent" },
    React.createElement(
        "div",
        { id:"child" }, 
        [React.createElement("h1", {},"h1 tag from parent-child -h1"),React.createElement("h3", {},"h3 tag from parent-child -h3")]
    )
);
const complex = React.createElement("div", {id: "complex"}, [React.createElement("div", {id : "p1"}, [React.createElement("h1", {id : "h1c"}, "Parent-1 h1 tag"), React.createElement("h3", {id : "h3c"}, "Parent-1 h3 tag")]),React.createElement("div", {id : "p2"}, [React.createElement("h1", {id : "h1c"}, "Parent-2 h1 tag"), React.createElement("h3", {id : "h3c"}, "Parent-2 h3 tag")])])

// root2.render(heading2)
root2.render(complex)

console.log(heading)
console.log(heading2)
console.log(complex)

