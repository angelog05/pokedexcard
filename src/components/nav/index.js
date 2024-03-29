import { useRouter } from "next/router";
import React, { useState } from "react";
import getPokemonId from "../../functions/pokemon";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineSearch,
  HiOutlineHome
} from "react-icons/hi";

const Nav = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const searchPokemon = (id) => {
    if (id.length) router.push(`/pokemon/${id}`);
  };

  const searchPokemonWithButtonReturn = () => {
    const id = parseInt(getPokemonId(router)) - 1;
    setSearch("");
    searchPokemon(id.toString());
  };

  const searchPokemonWithButtonNext = () => {
    let id = parseInt(getPokemonId(router)) + 1;
    if (!id) id = "1";

    setSearch("");
    searchPokemon(id.toString());
  };

  return (
    <div className="px-2 py-4 grid grid-cols-6 gap-1">
      <button
        type="button"
        tabIndex={2}
        className="btn-primary bg-yellow-300 w-10"
        onClick={() => router.push('/')}
      >
        <HiOutlineHome />
      </button>
      <input
        tabIndex={1}
        type="text"
        required
        placeholder="ID or name..."
        className="input-primary col-start-2 col-end-4"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button
        type="button"
        tabIndex={2}
        className="btn-primary"
        onClick={() => searchPokemon(search)}
      >
        <HiOutlineSearch />
      </button>
      <button
        tabIndex={3}
        className="btn-primary"
        onClick={() => searchPokemonWithButtonReturn()}
      >
        <HiOutlineChevronLeft />
      </button>
      <button
        tabIndex={4}
        className="btn-primary"
        onClick={() => searchPokemonWithButtonNext()}
      >
        <HiOutlineChevronRight />
      </button>
    </div>
  );
};

export default Nav;
