function TopNavbar({ data }) {
  const { isOpen, setIsOpen, darkMod, setDarkMod } = data;

  return (
    <div className="flex w-auto  bg-gray-100 dark:bg-gray-900 justify-between p-4 items-center shadow">
      {/* Left: Hamburger (mobile only) */}
      <div
        className="pi pi-bars text-gray-500 dark:text-white text-2xl cursor-pointer md:hidden"
        onClick={() => setIsOpen(true)}
      ></div>

      {/* Title */}
      <div className="text-2xl text-gray-500 font-bold dark:text-white">
        Todo App
      </div>

      {/* Right Side */}
      <div className="flex gap-4 items-center">
        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMod(!darkMod)} className="text-xl">
          {darkMod ? "☀️" : "🌙"}
        </button>

        {/* User Icon */}
        <div className="pi pi-user text-gray-500 dark:text-white text-xl"></div>
      </div>
    </div>
  );
}

export default TopNavbar;
