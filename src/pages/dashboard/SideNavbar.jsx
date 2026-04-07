import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";
import "primeicons/primeicons.css";
import { useEffect } from "react";

function SideNavbar({ sideData }) {
  const { isOpen, setIsOpen } = sideData;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full z-40 bg-gray-200 dark:bg-gray-800
        transition-all duration-300
        ${isOpen ? "w-64" : "w-0"} 
        overflow-hidden`}
      >
        {/* Header */}
        <div className="flex p-2 justify-between border-b items-center dark:text-white">
          <div className="pi pi-tiktok text-gray-500 text-xl"></div>

          <Button
            rounded
            text
            onClick={() => setIsOpen(false)}
            icon="pi pi-arrow-circle-left"
          />
        </div>

        {/* Menu */}
        <div className="p-4 dark:text-white">
          <ul className="flex flex-col gap-4 pt-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-400 text-white px-4 py-2 rounded-md"
                    : "text-gray-600 hover:bg-gray-200 px-4 py-2 rounded-md"
                }
              >
                <span className="pi pi-list"> Item List</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/add"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-400 text-white px-4 py-2 rounded-md"
                    : "text-gray-600 hover:bg-gray-200 px-4 py-2 rounded-md"
                }
              >
                <span className="pi pi-plus"> Add Task</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default SideNavbar;
