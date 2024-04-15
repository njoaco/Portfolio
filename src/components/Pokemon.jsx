import React from "react";
import pokemonGif from '/assets/gengar.gif'; // Asegúrate de tener la ruta correcta

function Pokemon() {
  return (
    <img src={pokemonGif} alt="Pokémon" className="pokemon" />
  );
}

export default Pokemon;