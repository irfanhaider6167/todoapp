import { useEffect, useState } from "react";
import TopNavbar from "./TopNavbar";
import SideNavbar from "./SideNavbar";
import ContentArea from "../../pages/dashboard/ContentArea";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const [darkMod, setDarkMod] = useState(false);

  return (
    <div
      className={`${darkMod ? "dark dark:bg-gray-900" : ""} dark:bg-gray-900 `}
    >
      <TopNavbar data={{ isOpen, setIsOpen, darkMod, setDarkMod }} />

      <div className="flex h-screen w-auto">
        <SideNavbar sideData={{ isOpen, setIsOpen }} />

        <ContentArea isOpen={isOpen} />
      </div>
    </div>
  );
}

export default Dashboard;
