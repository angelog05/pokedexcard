import Nav from "../nav";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const Layout = (props) => {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        /* initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: { 
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: { 
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100& 100%, 0% 100%)",
          },
          exitState: { 
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }} */
        className="base-page-size"
      >
        <div className="h-screen bg-primary-400">
          <div className="pl-3 pr-3 pb-6 bg-primary-400">
            <Nav />
            <div className="flex justify-center py-4">{props.children}</div>
            {/* <Footer /> */}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
