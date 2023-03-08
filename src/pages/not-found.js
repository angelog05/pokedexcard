import React from "react";
import ErrorNotFound from "../components/error-not-found";
import Nav from "../components/nav";

const NotFound = () => {
  return (
    <div className="pl-3 pr-3 pb-6 bg-primary-400 h-screen">
      <Nav />
      <div className="flex justify-center py-72">
        <ErrorNotFound />
      </div>
    </div>
  );
};

export default NotFound;
