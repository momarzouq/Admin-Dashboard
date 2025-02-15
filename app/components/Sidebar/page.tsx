import React from "react";
import Plan from "./Plan";
import AccountToggle from "./AccountToggle";
import RouteSelect from "./RouteSelect";
import Search from "./Search";


export default function Sidebar() {
  return (
    <div>
      <div className=" sticky top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle/>
        <Search />
        <RouteSelect />
      </div>
      <Plan />
    </div>
  );
}
