import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import getAbility from "../../functions/movements";

const BoxInfo = (props /* { name = "Default ability", urlDescription } */) => {
  const [hidden, setHidden] = useState(false);
  const [description, setDescription] = useState("");
  const tl = gsap.timeline();

  useEffect(() => {
    getAbility(props.urlDescription).then(function (result) {
      setDescription(result);
    });
  }, []);

  /* const openMovementEffects = () => {
    gsap.from(`.description${props.index}`, { opacity: 0, duration: 0.5 });
  }; */

  return (
    <div key="boxinfo">
      <section
        onClick={() => {
          setHidden((prev) => !prev);
          console.log("click");
        }}
        id={props.name}
        key={props.name}
        className="bg-primary-300 my-2 p-3 shadow-sm rounded-sm flex justify-between hover:bg-primary-500 focus:bg-primary-400 transition-colors focus:ring-offset-1 focus:ring font-semibold"
      >
        <h1>{`${props.name.slice(0, 1).toUpperCase()}${props.name.slice(
          1
        )}`}</h1>
      </section>
      {hidden && (
        <section
          className={`-mt-2 p-2 flex description${props.index} shadow-sm mb-3 bg-primary-300 rounded-b-md`}
        >
          {description}
        </section>
      )}
    </div>
  );
};

BoxInfo.getInitialProps = async (props) => {
  console.log("props+++", props);
};

export default BoxInfo;
