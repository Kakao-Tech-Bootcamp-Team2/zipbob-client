import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DefaultLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
