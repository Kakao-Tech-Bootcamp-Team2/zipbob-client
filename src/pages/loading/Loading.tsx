import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

// 3단계 애니메이션 (MoveImg가 FanImage 위로 올라옴)
const moveAnimation = keyframes`
  0% {
    transform: translateY(0); /* 초기 위치 */
    animation-timing-function: ease-out; /* 부드럽게 시작 */
  }
  25% {
    transform: translateY(30%); /* 첫 번째 점프 */
    animation-timing-function: ease-in; /* 위로 올라갈 때 느려짐 */
  }
  50% {
    transform: translateY(55%); /* 두 번째 점프 */
    animation-timing-function: ease-out; /* 내려올 때 가속 */
  }
  75% {
    transform: translateY(70%); /* 마지막 점프 */
    animation-timing-function: ease-in; /* 위로 올라갈 때 느려짐 */
  }
  100% {
    transform: translateY(80%); /* 팬 위에 도착 */
    animation-timing-function: ease-out; /* 부드럽게 멈춤 */
  }
`;

export const Layout = styled.div`
  max-width: 520px;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative; /* 상대 위치를 기준으로 애니메이션 처리 */
`;

export const FanImage = styled.img`
  width: 160px;
`;

export const MoveImg = styled.img`
  animation: ${moveAnimation} 1.5s ease-in-out infinite; /* 3초 동안 3단계 애니메이션 반복 */
  position: absolute;
  top: 30%; /* MoveImg의 초기 위치 */
  z-index: 999;
`;

export const LoadingMsg = styled.h1`
  font-family: "BM-HANNA";
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BackButton = styled.img`
  position: absolute;
  top: 5%;
  left: 5%;
  cursor: pointer;
`;

export const Loading = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <BackButton onClick={() => navigate("/")} src="/images/back.svg" />
      <MoveImg src="/images/move.svg" />
      <FanImage src="/images/fan.svg" />
      <LoadingMsg>레시피를 받아오고 있어요...</LoadingMsg>
    </Layout>
  );
};
