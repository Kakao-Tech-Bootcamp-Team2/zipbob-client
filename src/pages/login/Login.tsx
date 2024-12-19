import * as S from "./Login.styled";
export const Login = () => {
  return (
    <S.Container>
      <S.LogoBox>
        <S.Logo src="/images/logo.svg" />
        <S.HeadText>ZipBob</S.HeadText>
      </S.LogoBox>
      <S.ButtonConatainer>
        <S.ButtonImage
          onClick={() =>
            (window.location.href = `http://backend.zipbob.site/oauth2/authorization/google`)
          }
          src="/images/google.svg"
        />
        <S.ButtonImage
          onClick={() =>
            (window.location.href = `http://backend.zipbob.site//oauth2/authorization/naver`)
          }
          src="/images/naver.svg"
        />
        <S.ButtonImage
          onClick={() =>
            (window.location.href = `${
              import.meta.env.VITE_BASE_URL
            }/oauth2/authorization/kakao`)
          }
          src="/images/kakao.svg"
        />
      </S.ButtonConatainer>
    </S.Container>
  );
};
