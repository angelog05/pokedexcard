import { gsap } from "gsap";
import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/layout";

const Index = () => {
  useEffect(() => {
    gsap.from(".main-content", {
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="main-content">
      <Head>
        <title>Home</title>
      </Head>

      <Layout>
        <section className="h-1/2">
          <h1>Pokemon</h1>
        </section>
      </Layout>
    </div>
  );
};

export default Index;
