import React from "react";
import Nav1 from "./components/navbar/nav1";
import Nav2 from "./components/navbar/Nav2";
import Nav3 from "./components/navbar/Nav3";
import Nav4 from "./components/navbar/Nav4";

const App = () => {
  return (
    <div className=" space-y-5 bg-gray-300">
      <Nav1 />
      <Nav2 />
      <Nav3 />
      <Nav4 />
      <hr />
    </div>
  );
};

export default App;
