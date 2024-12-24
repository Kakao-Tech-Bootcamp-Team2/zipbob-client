import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-width: 520px;
  margin-bottom: 150px;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  top: 20%;
  right: 5%;
  max-width: 520px;
  height: 250px;
  transform: rotate(-2deg);
  width: 90%;
  border: 3px solid #d0d0d0;
  background-color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const decofri = styled.img`
  position: absolute;
  right: -2%;
  top: -12%;
  width: 100px;
`;

export const TextZone = styled.p`
  transform: rotate(-1.5deg);
  font-family: "BM-HANNA";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ModifyButton = styled.button`
  position: absolute;
  bottom: 5%;
  right: -10%;
  width: 200px;
  height: 40px;
  transform: rotate(5deg);
  border: 3px solid #d0d0d0;

  background: #fff;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ababab;

  font-family: "BM-HANNA";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;
`;
