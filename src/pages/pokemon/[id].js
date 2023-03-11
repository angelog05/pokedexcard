import fetch from "isomorphic-fetch";
import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Movements from "../../components/movements";
import Loading from "../../components/loading";


const Pokemon = ({ pokemon }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    console.log('effect')
    setIsLoading(true);
    if (pokemon.error) {
      setError(true);
      router.push("/not-found")
    } else {
      setError(false);
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [pokemon]);

  const hp = !pokemon.error
    ? pokemon?.stats.filter((item) => item.stat.name === "hp")
    : [
        {
          name: "",
          stat: {
            name: "",
          },
        },
      ];

  return (
    <div>
      <Head>
        <title>{pokemon?.name.toUpperCase()}</title>
      </Head>

      <Layout> 
        {isLoading && <Loading />}     

        {!isLoading && (
          <section className="pokemon max-w-sm sm:w-2/4 xl:w-2/5 bg-slate-100 rounded-lg bg-primary-50 pl-4 pr-4 pt-2 pb-3 mb-20">
            <article className="flex justify-between items-baseline">
              <h1 className="font-bold text-lg">
                {pokemon?.name.toUpperCase()}
              </h1>
              <aside className="stats flex items-baseline">
                <h1 className="text-xs">{hp[0]?.stat.name}</h1>
                <h1 className="text-primary-900 text-2xl font-semibold">
                  {hp[0]?.base_stat}
                </h1>
              </aside>
            </article>
            <article className="flex justify-center bg-primary-300">
              <img src={`${pokemon?.sprites.other.home.front_default}`} />
            </article>
            <article className="movements">
              <Movements movements={pokemon?.abilities} />
            </article>
          </section>
        )}
      </Layout>
    </div>
  );
};

Pokemon.getInitialProps = async (ctx) => {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${ctx.query.id}`
  )
    .then(async (poke) => {
      const { name, sprites, stats, abilities } = await poke.json();

      return {
        name,
        sprites,
        stats,
        abilities,
      };
    })
    .catch((error) => {
      return {
        name: "",
        sprites: {
          other: {
            home: "",
          },
        },
        stats: {},
        abilities: [],
        error: true,
        detailError: error,
      };
    });

  return { pokemon };
};

export default Pokemon;
