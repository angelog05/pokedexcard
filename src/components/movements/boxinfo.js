import React, { useState } from "react";
import getAbility from "../../functions/movements";

const BoxInfo = (props/* { name = "Default ability", urlDescription } */) => {
  const [hidden, setHidden] = useState(false);

  console.log('url', props.urlDescription);
  const result = getAbility(props.urlDescription);
  console.log('result', result)

  return (
    <div>
      <section
        onClick={() => setHidden((prev) => !prev)}
        id={props.name}
        key={props.name}
        className="mb-3 p-3 shadow-sm rounded-lg flex justify-between hover:bg-primary-500 active:bg-primary-400 transition-colors duration-200"
      >
        <h1>{props.name}</h1>
        <section>+</section>
      </section>
      <section className={`p-2 ${hidden ? "hidden" : ""}`}>{}</section>
    </div>
  );
};

export default BoxInfo;