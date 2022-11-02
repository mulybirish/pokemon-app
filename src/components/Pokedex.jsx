import React from "react";
import Pcard from "./Pcard";

const pokedex = ({ pokemonData, url }) => {
  return (
    <div className="container">
      {pokemonData.map((item) => {
        return <Pcard src={url} item={item} />;
      })}
    </div>
  );
};

export default pokedex;
