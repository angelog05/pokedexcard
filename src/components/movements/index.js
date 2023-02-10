import React from "react";

function Movements({ movements }) {
  const BoxInfo = ({
    name = "Default ability",
    description = "Default description",
  }) => (
    <aside className="mb-3 p-2 shadow-sm rounded-lg flex justify-between">
      <h1>{name}</h1>
      <section>+</section>
    </aside>
  );

  return (
    <section className="max-h-40 bg-scroll overflow-auto mt-2" style={{ border: ''}}>
      <BoxInfo />
      <BoxInfo />
      <BoxInfo />
      <BoxInfo />
      <BoxInfo />
      <BoxInfo />
    </section>
  );
}

export default Movements;
