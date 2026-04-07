import { Outlet } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";

function Layout() {
  return (
    <>
      <Dashboard />
      <Outlet />
    </>
  );
}

export default Layout;
