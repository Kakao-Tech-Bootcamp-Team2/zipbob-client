import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f8ff;
  flex-direction: column;
`;

export const Logo = styled.img`
  height: 30vh;
`;

export const HeadText = styled.h1`
  ${({ theme }) => theme.fonts.h1}
`;

export const BodyText = styled.p`
  ${({ theme }) => theme.fonts.b1}
`;
