import Layout from "../../components/layout";
import Head from "next/head";
import fetch from "isomorphic-fetch";


const Pokemon = ({ pokemon }) => {
  return (
    <div>
      <Head>
        <title>{pokemon.name.toUpperCase()}</title>
      </Head>
      <Layout>
        <div className="text-center">
          <h1>{pokemon.name.toUpperCase()}</h1>
          <img src={`${pokemon.sprites.other.home.front_default}`} />
        </div>
      </Layout>
    </div>
  );
};

Pokemon.getInitialProps = async (ctx) => {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${ctx.query.id}`
  ).then(async (poke) => {
    const { name, sprites } = await poke.json();

    return {
      name,
      sprites,
    };
  });

  return { pokemon };
};

export default Pokemon;
