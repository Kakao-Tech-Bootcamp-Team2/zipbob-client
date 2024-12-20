import * as S from "./SignUp.styled";

export const SignUp = () => {
  return (
    <S.Layout>
      <S.SignUpTitle>
        회원가입
        <S.ImgLabel src="images/tomato.svg" />
      </S.SignUpTitle>
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
