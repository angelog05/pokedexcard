import Nav from "../nav";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Footer from "../footer";

const Layout = (props) => {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <section
        className="flex justify-center content-center gradient-1 "
        /* style={{ background: "linear-gradient(to left, #fdc830, #f37335)" }} */
      >
        <div
          className="px-2 bg-red-500 fixed top-0 w-full h-auto z-50"
        >
          <Nav />
        </div>
        <div
          className="flex justify-center mt-40 py-10 px-5 w-full h-full"
          /* style={{ background: "linear-gradient(to left, #fdc830, #f37335)" }} */
        >
          {props.children}
        </div>
        {/* <div
          className="fixed bottom-0 w-full h-20 bg-red-500"
        >
          <Footer />
        </div> */}
      </section>
    </AnimatePresence>
  );
};

export default Layout;
