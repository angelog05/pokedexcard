import Layout from "../components/layout";
import Head from "next/head";
import fetch from "isomorphic-fetch";

const Index = (props) => {

  return (
    <div className="main-content">
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <h1>Home</h1>
      </Layout>
    </div>
  );
};

/*Index.getInitialProps = async (ctx) => {
  
  const result = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"
  );
  const data = await result.json();
  
  return { data };
};*/

export default Index;
