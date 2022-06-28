import React from "react";
import Filter from "./Filter";

const ExampleFilter = () => {
  const texts = ["vau", "lala", "stanko"];
  return (
    <div>
      <Filter texts={texts} />
    </div>
  );
};

export default ExampleFilter;
