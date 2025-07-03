/*const heading = document.createElement("h1");
heading.innerHTML = "hello world from javascript";

const root = document.getElementById("root");
root.appendChild(heading);*/

const parent = React.createElement(
  'div',
  { id: "parent" },
  [React.createElement("div",{ id: "child" },[
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h1", {}, "I am h1 tag")
      ]
    )
  ]
);
const root = ReactDom.createElement(document.getElementById("root"));

root.render(parent);