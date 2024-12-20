import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f6f8ff;
  background-image: url("/images/background.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  flex-direction: column;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  height: 30vh;
  align-self: center; /* 로고를 중앙에 정렬 */
`;

export const HeadText = styled.h1`
  ${({ theme }) => theme.fonts.h1}
`;

export const ButtonConatainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonImage = styled.img`
  border-radius: 6px;
  margin: 10px;
  cursor: pointer;
`;
