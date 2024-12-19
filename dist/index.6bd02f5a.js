imp;
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {
            id: "heading1"
        }, "Heading1"),
        React.createElement("h2", {
            id: "heading1"
        }, "Heading1")
    ]),
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {
            id: "heading1"
        }, "Heading1"),
        React.createElement("h2", {
            id: "heading1"
        }, "Heading1")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
