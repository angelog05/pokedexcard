import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineSearch
} from "react-icons/hi";

const Footer = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const searchPokemon = () => {
    if (search.length) router.push(`/pokemon/${search}`);
  }

  return (
    <div className="px-2 py-4 grid grid-cols-6 gap-1">
      <input
        tabIndex={1}
        type="text"
        required
        placeholder="ID or name..."
        className="input-primary col-start-1 col-end-4"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="button" tabIndex={2} className="btn-primary" onClick={() => searchPokemon()}>
        <HiOutlineSearch />
      </button>
      <button tabIndex={3} className="btn-primary">
        <HiOutlineChevronLeft />
      </button>
      <button tabIndex={4} className="btn-primary">
        <HiOutlineChevronRight />
      </button>
    </div>
  )
}

export default Footer;