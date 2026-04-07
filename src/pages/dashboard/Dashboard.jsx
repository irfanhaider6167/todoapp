import { useEffect, useState } from "react";
import TopNavbar from "./TopNavbar";
import SideNavbar from "./SideNavbar";
import ContentArea from "./ContentArea";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const [darkMod, setDarkMod] = useState(false);

  const switchTheme = (theme) => {
    const themeLink = document.getElementById("theme-link");
    if (themeLink) {
      themeLink.href = `/themes/${theme}/theme.css?v=${Date.now()}`;
    }
  };

  useEffect(() => {
    const theme = darkMod ? "lara-dark-blue" : "lara-light-blue";

    switchTheme(theme);

    if (darkMod) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMod]);

  return (
    <div className="dark:bg-gray-900">
      <TopNavbar data={{ isOpen, setIsOpen, darkMod, setDarkMod }} />

      <div className="flex h-screen">
        <SideNavbar sideData={{ isOpen, setIsOpen }} />

        <ContentArea isOpen={isOpen} />
      </div>
    </div>
  );
}

export default Dashboard;
