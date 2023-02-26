import React, { useState } from "react";

import BoxInfo from './boxinfo';

function Movements({ movements }) {
  
  return (
    <section className="bg-scroll overflow-auto mt-2">
      {movements.map((mov, index) => (
        <BoxInfo index={index} key={mov.ability.name} name={mov.ability.name} urlDescription={mov.ability.url} />
      ))}
    </section>
  );
}

export default Movements;
