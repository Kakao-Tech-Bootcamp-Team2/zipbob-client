import styled from "styled-components";

interface NavigationProps {
  $isActive: boolean;
}

export const Layout = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 520px;
  width: 100%;
  height: 115px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-around;
  background-color: white;
`;

export const NavigationItem = styled.img<NavigationProps>`
  height: ${({ $isActive }) => ($isActive ? "150px" : "100%")};
  transform: ${({ $isActive }) =>
    $isActive ? "translateY(-30px)" : "translateY(0)"};
  transition: transform 0.3s ease, height 0.3s ease;
  cursor: pointer;
`;
