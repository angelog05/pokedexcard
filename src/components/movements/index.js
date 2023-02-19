import React, { useState } from "react";

import BoxInfo from './boxinfo';

function Movements({ movements }) {
  
  return (
    <section className="max-h-40 bg-scroll overflow-auto mt-2">
      {movements.map((mov) => (
        <BoxInfo name={mov.ability.name} urlDescription={mov.ability.url} />
      ))}
    </section>
  );
}

export default Movements;
