import * as S from "./SignUp.styled";

import { useState } from "react";

import { Title } from "../../components/title/Title";
import { useExtractTokens } from "../../hooks/useExtractTokens";
import { getNicknameStatus } from "../../apis/auth";

export const SignUp = () => {
  useExtractTokens("signUp");
  const [nickname, setNickname] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const isValidNickname = async () => {
    const result = await getNicknameStatus(nickname);
    console.log(result);
  };
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
          <S.NickNameInput
            type="text"
            value={nickname}
            onChange={handleNickname}
            placeholder="닉네임 입력"
          />
          <S.NickNameValidCheckBtn onClick={() => isValidNickname()}>
            중복 확인
          </S.NickNameValidCheckBtn>
        </S.NickNameValidWrapper>
      </S.NickNameContainer>
      <S.StartButton disabled={!isValid}>시작하기</S.StartButton>
    </S.Layout>
  );
};
