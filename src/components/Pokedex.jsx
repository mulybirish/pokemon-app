import React from "react";
import Pcard from "./Pcard";

const pokedex = ({ pokemonData }) => {
  return (
    <div className="container">
      {pokemonData.map((item) => {
        return <Pcard item={item} />;
      })}
    </div>
  );
};

export default pokedex;
