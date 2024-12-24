import styled from "styled-components";

export const Layout = styled.div`
  max-width: 520px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  /* justify-content: space-around; */
`;

export const Title = styled.div`
  font-family: "BM-HANNA";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MenuZone = styled.div`
  width: 90%;
  min-height: 80vh;
  border-radius: 10px;
  border: 5px solid #d0d0d0;
  background: white;
  margin-bottom: 10vh;
`;
