import Nav from "../nav";

const Layout = (props) => {
  return (
    <div className="h-screen bg-primary-400">
      <div className="pl-3 pr-3 pb-6 bg-primary-400 ">
        <Nav />
        <div className="flex justify-center py-4">{props.children}</div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
