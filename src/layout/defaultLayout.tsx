import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
export const DefaultLayout = () => {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  );
};
