import Nav from "../nav";
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
    <div className="pl-3 pr-3 pb-6 bg-primary-400">
      <Nav />
      <div className="flex justify-center">{props.children}</div>
    </div>
  );
};

export default Layout;
