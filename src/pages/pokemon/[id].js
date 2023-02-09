import Layout from "../../components/layout";
import Head from "next/head";
import fetch from "isomorphic-fetch";

const Pokemon = ({ pokemon }) => {
  const hp = pokemon.stats.filter((item) => item.stat.name === "hp");

  return (
    <div>
      <Head>
        <title>{pokemon.name.toUpperCase()}</title>
      </Head>
      <Layout>
        <section className="md:flex bg-slate-100 rounded-lg bg-primary-50 pl-4 pr-4 pt-2 pb-3">
          <article className="flex justify-between items-baseline">
            <h1 className="font-bold">{pokemon.name.toUpperCase()}</h1>
            <aside className="stats flex items-baseline">
              <h1 className="text-xs">{hp[0].stat.name}</h1>
              <h1 className="text-primary-900 text-xl font-semibold">{hp[0].base_stat}</h1>
            </aside>
          </article>
          <article className="bg-primary-300">
            <img src={`${pokemon.sprites.other.home.front_default}`} />
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
    const { name, sprites, stats } = await poke.json();

    return {
      name,
      sprites,
      stats,
    };
  });

  return { pokemon };
};

export default Pokemon;
