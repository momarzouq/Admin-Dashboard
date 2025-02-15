export default function AccountToggle() {
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
      <button className="flex p-0.5 gap-2">
        <img
          src="/profile.JPG"
          alt="Profile"
          className="w-10 h-12 object-cover rounded shrink-0 shadow"
        />
        <div>
            <span className="text-sm font-semibold">Mohamed Marzouq</span>
            <span className="text-xs block text-stone-500">momarzouqeng@gmail.com</span>
        </div>
      </button>
    </div>
  );
}
