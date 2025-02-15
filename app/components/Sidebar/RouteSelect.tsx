import React from "react";
import {
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiUser,
} from "react-icons/fi";

export default function RouteSelect() {
  return (
    <div className="space-y-1">
      <Route Icon={FiHome} selected={true} title="Dashboard" />
      <Route Icon={FiUser} selected={false} title="Team" />
      <Route Icon={FiPaperclip} selected={false} title="Invoices" />
      <Route Icon={FiLink} selected={false} title="Integration" />
      <Route Icon={FiDollarSign} selected={false} title="Finance" />
    </div>
  );
}

const Route = ({
  selected,
  Icon,
  title,
}: {
  selected: boolean;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
}) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transtion-[box-shadow,_background-color,_color]
        ${
          selected
            ? "bg-white text-stone-950 shadow "
            : "hover:bg-stone-200  bg-transparent text-stone-500 shadow-none"
        }
        `}
    >
      <Icon />
      <span>{title}</span>
    </button>
  );
};
