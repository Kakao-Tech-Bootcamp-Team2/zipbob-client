import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { GlobalBottomNavigation } from "../components/globalBottomNavigation/GlobalBottomNavigation";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export const DefaultLayout = () => {
  return (
    <Layout>
      <Outlet />
      <GlobalBottomNavigation />
    </Layout>
  );
};
