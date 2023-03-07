import fetch from "isomorphic-fetch";

const URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/"

export const getPokemon = async id => {
  const pokemon = await fetch(
    `${URL_POKEMON}${id}`
  ).then(async (poke) => {
    const { name, sprites, stats, abilities } = await poke.json();

    return {
      name,
      sprites,
      stats,
      abilities,
    };
  });

  return { pokemon };
};

