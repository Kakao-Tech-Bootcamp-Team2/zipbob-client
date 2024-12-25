import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalBottomNavigation } from "../components/globalBottomNavigation/GlobalBottomNavigation";
import { useEffect } from "react";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export const DefaultLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!localStorage.getItem("ACCESS_TOKEN")) {
      navigate("/login");
    }
  }, []);
  return (
    <Layout>
      <Outlet />
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/loading" && <GlobalBottomNavigation />}
    </Layout>
  );
};
