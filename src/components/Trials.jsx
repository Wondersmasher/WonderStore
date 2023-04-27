import React from "react";
import data from "../data/data";
const Trials = () => {
  const trial = data.map((item, id) => (
    <img className="img" key={id} src={item.image} alt={item.description} />
  ));
  return <div>{trial}</div>;
};

export default Trials;
