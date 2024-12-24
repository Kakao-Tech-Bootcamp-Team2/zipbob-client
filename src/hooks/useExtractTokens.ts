import { useEffect, useState } from "react";
import { handleParseJwt } from "../utils/handleJWT";

export const useExtractTokens = (location: string) => {
  const [isStored, setIsStored] = useState<boolean>(false);

  useEffect(() => {
    const extractAndStoreTokens = () => {
      try {
        // 현재 브라우저 URL의 쿼리 파라미터 추출
        const urlParams = new URLSearchParams(window.location.search);
        let accessToken;
        let refreshToken;
        // access_token과 refresh_token 추출
        if (location === "home") {
          accessToken = urlParams.get("accessToken");
          refreshToken = urlParams.get("refreshToken");
        } else {
          accessToken = urlParams.get("access_token");
          refreshToken = urlParams.get("refresh_token");
        }

        // 둘 중 하나라도 존재하지 않으면 에러 처리
        if (!accessToken || !refreshToken) {
          throw new Error("Required tokens are missing in the URL.");
        }

        // localStorage에 저장
        localStorage.setItem("ACCESS_TOKEN", accessToken);
        localStorage.setItem("REFRESH_TOKEN", refreshToken);
        handleParseJwt();

        console.log("Tokens successfully stored in localStorage.");
        setIsStored(true); // 저장 성공
      } catch (error) {
        console.error("Error extracting and storing tokens:", error);
        setIsStored(false); // 저장 실패
      }
    };

    // 호출
    extractAndStoreTokens();
  }, []); // 의존성 배열 비워둠 (URL이 변경될 경우가 드물기 때문)

  return isStored; // 저장 성공 여부 반환
};
