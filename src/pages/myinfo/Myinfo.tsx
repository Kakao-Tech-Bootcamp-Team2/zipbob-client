import * as S from "./Myinfo.styled";
import { Title } from "../../components/title/Title";

import { useEffect } from "react";
import { getUserInfo, patchLogout } from "../../apis/auth";

export const MyInfo = () => {
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <S.Layout>
      <Title url="" title="내 정보" $top="5%" $imageTop="" $right="-30%" />
      <S.InfoWrapper>
        <S.decofri src="/images/fri.svg" />
        <S.TextZone>{localStorage.getItem("nickname") || "test"}</S.TextZone>
        <S.TextZone>{localStorage.getItem("email") || "test"}</S.TextZone>
        <S.ModifyButton onClick={() => patchLogout}>로그아웃</S.ModifyButton>
      </S.InfoWrapper>
    </S.Layout>
  );
};
