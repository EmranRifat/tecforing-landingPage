import React from "react";
import Left from "./left";
import Middle from "./middle";
import Rignt from "./Rignt";

const Main = () => {
  return (
    <div className="flex justify-around container mx-auto mt-4">
      <Left />
      <Middle />
      <Rignt></Rignt>
    </div>
  );
};

export default Main;
