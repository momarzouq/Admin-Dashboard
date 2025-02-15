"use client";
import { Command } from "cmdk";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiEye, FiLink, FiLogOut, FiPhone, FiPlus } from "react-icons/fi";
export default function CommandMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [value, setValue] = useState("");
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "K" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);

    return () => document.removeEventListener("keydown", down);
  }, []);
  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 bg-stone-950/50"
      onClick={() => setOpen(false)}
    >
      <div className="bg-white rounded-lg shadow-xl border-stone-300 border  overflow-hidden w-full max-w-lg mx-auto mt-12">
        <Command.Input
          value={value}
          onValueChange={setValue}
          placeholder="
        What do you nedd...?"
          className="relative border-b border-stone-300 p-3 text-md w-full placeholder:text-stone-400 focus:outline-none"
        />
        <Command.List className="p-3">
          <Command.Empty>
            No results found for{" "}
            <span className="text-violet-500">"{value}"</span>
          </Command.Empty>

          <Command.Group heading="Team" className="text- mb-3 text-stone-300">
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <FiPlus />
              Invite Member
            </Command.Item>
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <FiEye />
              See Org Chart
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Integration" className="text- mb-3 text-stone-300">
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <FiLink />
             Link Services
            </Command.Item>
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <FiPhone />
              Contact Support
            </Command.Item>
          </Command.Group>
          <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-50 bg-stone-950 rounded items-center gap-2">
              <FiLogOut />
              Sign Out
            </Command.Item>
        </Command.List>
      </div>
    </Command.Dialog>
  );
}
