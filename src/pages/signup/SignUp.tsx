import * as S from "./SignUp.styled";
import { Title } from "../../components/title/Title";
import { useExtractTokens } from "../../hooks/useExtractTokens";

export const SignUp = () => {
  useExtractTokens();
  return (
    <S.Layout>
      <Title
        url="images/tomato.svg"
        title="회원가입"
        $top="24%"
        $imageTop="-80%"
      />
      <S.NickNameContainer>
        <S.NickNameValidWrapper>
          <S.NickNameInput placeholder="닉네임 입력" />
          <S.NickNameValidCheckBtn>중복 확인</S.NickNameValidCheckBtn>
        </S.NickNameValidWrapper>
      </S.NickNameContainer>
      <S.StartButton>시작하기</S.StartButton>
    </S.Layout>
  );
};
