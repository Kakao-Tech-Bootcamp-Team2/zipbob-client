import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  min-height: 100vh;
  max-width: 520px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const SignUpTitle = styled.div`
  position: absolute;
  top: 24%;
  left: 5%;
  width: 174px;
  height: 56px;
  transform: rotate(2deg);
  border: 3px solid #d0d0d0;
  background-color: white;
  color: black;
  font-family: "BM-HANNA";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgLabel = styled.img`
  position: absolute;
  top: -70%;
  right: -20%;
`;

export const NickNameContainer = styled.div`
  position: fixed;
  top: 35%;
  max-width: 460px;
  width: 90%;
  height: 170px;
  border: 3px solid #d0d0d0;
  background-color: white;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;

export const NickNameValidWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0 2rem;
  justify-content: center;
  gap: 1.5rem;
`;

export const NickNameInput = styled.input`
  padding: 10px;
  width: 180px;
  height: 50px;
  color: #c1c1c1;
  background-color: #f6f8ff;
  font-family: "BM-HANNA";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const NickNameValidCheckBtn = styled.button`
  color: #c1c1c1;
  font-family: "BM-HANNA";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

export const StartButton = styled.button`
  background-color: white;
  width: 150px;
  height: 40px;
  transform: rotate(2deg);
  border: 3px solid #d0d0d0;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "BM-HANNA";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  position: absolute;
  bottom: 30%;
  right: 5%;
`;
