import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();

  return (
    <section className="absolute bottom-0 w-full">
      Created by Bragui - angelog05
    </section>
  );
};

export default Footer;
