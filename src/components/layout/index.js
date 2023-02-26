import Nav from "../nav";

const Layout = (props) => {
  return (
    <div className="pl-3 pr-3 pb-6 bg-primary-400 h-full">
      <Nav />
      <div className="flex justify-center">{props.children}</div>
    </div>
  );
};

export default Layout;
