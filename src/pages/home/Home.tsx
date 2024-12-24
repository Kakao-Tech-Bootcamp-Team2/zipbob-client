import * as S from "./Home.styled";
// import { useExtractTokens } from "../../hooks/useExtractTokens";
import { useEffect } from "react";
import { getRefrigerators } from "../../apis/refrigerators";

export const Home = () => {
  // useExtractTokens();
  useEffect(() => {
    const fetchData = async () => {
      await getRefrigerators();
    };
    fetchData();
  }, []);
  return (
    <S.Layout>
      <S.Title>{`${localStorage.getItem("nickname")}의 냉장고`}</S.Title>
      <S.MenuZone></S.MenuZone>
    </S.Layout>
  );
};
