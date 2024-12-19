import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div", { id: "parent" }, 
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {id: "heading1"}, "Neeraj is here🚀" ), 
            React.createElement("h2", {id: "heading1"}, "Heading1" )]), 
            React.createElement("div", { id: "child1" },
                [React.createElement("h1", {id: "heading1"}, "Heading1" ), 
                    React.createElement("h2", {id: "heading1"}, "Heading1" )])
        ]);


        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);
