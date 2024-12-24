import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Layout = styled.div`
  position: relative;
  max-width: 520px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ErrorText = styled.h1`
  color: rgba(255, 0, 0, 0.08);
  font-family: "BM-HANNA";
  font-size: 120px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ErrorImg = styled.img`
  position: absolute;
  left: 22.5%;
  top: 25%;
  width: 200px;
`;

export const ErrorMsg = styled.p`
  font-family: "BM-HANNA";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

export const Error = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <ErrorText>ERROR</ErrorText>
      <ErrorMsg
        style={{
          marginTop: "4rem",
        }}
        onClick={() => navigate("/")}
      >
        홈으로 돌아가기
      </ErrorMsg>
      <ErrorImg src="/images/error.svg" />
    </Layout>
  );
};
