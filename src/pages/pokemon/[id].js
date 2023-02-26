import Layout from "../../components/layout";
import Head from "next/head";
import fetch from "isomorphic-fetch";
import Movements from "../../components/movements";

const Pokemon = ({ pokemon }) => {
  const hp = pokemon.stats.filter((item) => item.stat.name === "hp");

  return (
    <div>
      <Head>
        <title>{pokemon.name.toUpperCase()}</title>
      </Head>

      <Layout>
        <section className="pokemon sm:w-2/4 xl:w-2/5 bg-slate-100 rounded-lg bg-primary-50 pl-4 pr-4 pt-2 pb-3 h-2/3">
          <article className="flex justify-between items-baseline">
            <h1 className="font-bold text-lg">{pokemon.name.toUpperCase()}</h1>
            <aside className="stats flex items-baseline">
              <h1 className="text-xs">{hp[0].stat.name}</h1>
              <h1 className="text-primary-900 text-2xl font-semibold">
                {hp[0].base_stat}
              </h1>
            </aside>
          </article>
          <article className="flex justify-center bg-primary-300">
            <img src={`${pokemon.sprites.other.home.front_default}`} />
          </article>
          <article className="movements">
            <Movements movements={pokemon.abilities} />
          </article>
        </section>
      </Layout>
    </div>
  );
};

Pokemon.getInitialProps = async (ctx) => {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${ctx.query.id}`
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

export default Pokemon;
