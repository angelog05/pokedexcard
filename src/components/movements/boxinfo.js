import React, { useState } from "react";
import getAbility from "../../functions/movements";

const BoxInfo = (props /* { name = "Default ability", urlDescription } */) => {
  const [hidden, setHidden] = useState(true);
  const [description, setDescription] = useState("");

  getAbility(props.urlDescription).then(function (result) {
    setDescription(result);
  });

  return (
    <div key="boxinfo">
      <section
        onClick={() => setHidden((prev) => !prev)}
        id={props.name}
        key={props.name}
        className="mb-3 p-3 shadow-sm rounded-lg flex justify-between hover:bg-primary-500 active:bg-primary-400 transition-colors focus:ring-offset-1 focus:ring"
      >
        <h1>{props.name}</h1>
        <section>+</section>
      </section>
      <section className={`p-2 ${hidden ? "hidden" : ""} flex`}>
        {description}
      </section>
    </div>
  );
};

BoxInfo.getInitialProps = async (props) => {
  console.log("props+++", props);
};

export default BoxInfo;
