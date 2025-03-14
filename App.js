/**
 *
 * <div id='parent'>
 *      <div id='child'>
 *          <h1>I am h1 Tag</h1>
 *      </div>
 * </div>
 *
 */

//Object 👇
const parent = React.createElement( 
  "div",
  { id: "parent" },
  [
    React.createElement(
        "div", { id: "child" },
        [ 
            React.createElement("h1", {}, "I am h1 Tag") ,
            React.createElement("h2", {}, "I am h2 Tag")
        ]
    ) , 
    React.createElement(
        "div", { id: "child2" },
        [ 
            React.createElement("h1", {}, "I am h1 Tag child2") ,
            React.createElement("h2", {}, "I am h2 Tag child2")
        ]
    )
  ]
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
