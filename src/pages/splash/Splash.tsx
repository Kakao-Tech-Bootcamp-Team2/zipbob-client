import { useNavigate } from "react-router-dom";
import * as S from "./Splash.styled";
import { useEffect } from "react";

export const Splash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 2500);
  }, []);
  return (
    <S.Container>
      <S.Logo src="/images/logo.svg" />
      <S.HeadText>ZipBob</S.HeadText>
      <S.BodyText>냉장고에 있는 재료로 맛있는 집밥 만들기</S.BodyText>
    </S.Container>
  );
};
