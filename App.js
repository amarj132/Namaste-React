import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX 🚀
  </h1>
);

// React Element
const heading = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX 🚀
  </h1>
);

// React functional Component

const HeadingComponent = () => (
  <div id="container">
    <Title />
    {heading}
    <h1 className="heading">Namsate React functional component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
