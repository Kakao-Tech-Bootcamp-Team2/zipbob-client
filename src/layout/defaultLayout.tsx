import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/Navbar";

export const DefaultLayout = () => {

  const location = useLocation(); // 현재 경로 가져오기

  // 네비게이션 바를 숨길 경로 설정
  const hideNavBarRoutes = ["/", "/login"];

  // 현재 경로가 네비게이션 바를 숨길 페이지에 포함되어 있는지 확인
  const shouldShowNavBar = !hideNavBarRoutes.includes(location.pathname);

  return (
    <>
      <Outlet />
      {shouldShowNavBar && <NavBar />}
    </>
  );
};
