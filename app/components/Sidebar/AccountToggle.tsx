import { FiChevronDown, FiChevronUp } from "react-icons/fi";  // Correct import path

export default function AccountToggle() {
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
      <button className="relative flex p-0.5 gap-2 hover:bg-stone-200 w-full">
        <img
          src="/profile.JPG"
          alt="Profile"
          className="w-10 h-12 object-cover rounded shrink-0 shadow"
        />
        <div className="text-start">
          <span className="text-sm font-semibold">Mohamed Marzouq</span>
          <span className="text-xs block text-stone-500">momarzouqeng@gmail</span>
        </div>
        <FiChevronDown className="absolute right-0 top-1/2 translate-y-[calc(-50%+4px)] text-xs" />
        <FiChevronUp className="absolute right-0 top-1/2 translate-y-[calc(-50%-4px)] text-xs"/>
      </button>
    </div>
  );
}
