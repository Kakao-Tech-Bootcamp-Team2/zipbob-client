import { useEffect } from "react";
import { handleParseJwt } from "../../utils/handleJWT";
import { postRefrigerators } from "../../apis/refrigerators";
import { patchNewUser } from "../../apis/auth";

export const Test = () => {
  useEffect(() => {
    handleParseJwt();
  }, []);
  return (
    <>
      <button onClick={postRefrigerators}>냉장고 생성 버튼</button>
      <br />
      <button onClick={() => patchNewUser("user")}>회원가입 버튼</button>
    </>
  );
};
