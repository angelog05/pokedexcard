import { useState } from 'react' 
import {
  HiOutlineSearch,
  HiOutlineChevronRight,
  HiOutlineChevronLeft,
} from "react-icons/hi";

const Nav = () => {
  const [search, setSearch] = useState("")
  return (
    <div className="px-2 py-4 grid grid-cols-6 gap-1">
      <input
        type="text"
        placeholder="ID or name..."
        className="input-primary col-start-1 col-end-4"
        onChange={(e) => setSearch(e.target.value)}
      />
      <section className="btn-primary">
        <HiOutlineSearch />
      </section>
      <section className="btn-primary">
        <HiOutlineChevronLeft />
      </section>
      <section className="btn-primary">
        <HiOutlineChevronRight />
      </section>
    </div>
  );
};

export default Nav;
