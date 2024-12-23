import * as S from "./SignUp.styled";

import { useState } from "react";

import { Title } from "../../components/title/Title";
import { useExtractTokens } from "../../hooks/useExtractTokens";
import { getNicknameStatus, patchNewUser } from "../../apis/auth";

export const SignUp = () => {
  useExtractTokens("signUp");
  const [nickname, setNickname] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  useExtractTokens("home");

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const isValidNickname = async () => {
    const result = await getNicknameStatus(nickname);
    console.log(result);
    setIsValid(result.isValid);
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
      <S.StartButton
        disabled={!isValid}
        onClick={() => {
          const nickname = localStorage.getItem("nickname");
          if (nickname) {
            patchNewUser(nickname);
          } else {
            alert("닉네임이 설정되지 않았습니다."); // null 처리
          }
        }}
      >
        시작하기
      </S.StartButton>
    </S.Layout>
  );
};
