"use client";
import { useState } from "react";
import { FiCommand, FiSearch } from "react-icons/fi";
import CommandMenu from "./CommandMenu";


export default function Search() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative bg-stone-200 mb-4 rounded flex items-center px-2 py-1.5 text-sm">
        <FiSearch className="mr-2" />
        <input
          onFocus={(e) => {
            e.target.blur();
            setOpen(true);
          }}
          type="text"
          placeholder="Search"
          className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none"
        />
        <span className="absolute flex py-1 px-2 text-xs gap-0.5 items-center shadow bg-stone-50 rounded-md right-1.5 top-1/2 -translate-y-1/2 ">
          <FiCommand/>K
        </span>
      </div>
      <div>
        <CommandMenu open={open} setOpen={setOpen} />
      </div>
    </>
  );
}