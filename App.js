/*
*
*<div id= "parent">
*   <div id="child">
*   <h1> I am h1 tag </h1>
*   <h2> I am h1 tag </h2>
*   </div>
*   </div>
*
*ReactElement(object) => HTML(Browser understandss)
**/

import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div",
    {
        id: "parent"
    },
    [React.createElement("div",
        {
            id: "child"
        },
        [React.createElement(
            "h1",
            {},
            "This is namaste react "
        ), React.createElement(
            "h2",
            {},
            "I am h2 tag"
        )]
    ),
    React.createElement("div",
        {
            id: "child"
        },
        [React.createElement(
            "h1",
            {},
            "I am h1 tag"
        ), React.createElement(
            "h2",
            {},
            "I am h2 tag"
        )]
    )]
)


// const heading = React.createElement("h1",
//     {
//         id: "heading", xyz: "abc"
//     },
//     "Hello world from React!");

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);