import Nav from "../nav";
import Head from "next/head";
import { gsap } from "gsap";
import { useEffect } from "react";

const Layout = (props) => {
  useEffect(() => {
    gsap.from(".main-content", {
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/united/bootstrap.min.css"
        />
      </Head>
      <Nav />
      <div className="main-content container d-flex justify-content-center">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
