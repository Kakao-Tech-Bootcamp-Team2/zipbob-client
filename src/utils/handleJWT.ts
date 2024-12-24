interface UserData {
  exp: number;
  iat: number;
  memberId: number;
  role: string;
  sub: string;
}

export const handleParseJwt = (): void => {
  try {
    const token = localStorage.getItem("ACCESS_TOKEN") || ""; // 토큰 가져오기
    console.log("Token:", token);

    // Base64 URL 디코딩
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

    // JSON Payload 디코딩
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );

    console.log("Decoded JSON Payload:", jsonPayload);

    // JSON 데이터를 UserData로 변환
    const data: UserData = JSON.parse(jsonPayload);
    console.log("Parsed Data:", data);

    // memberId 저장
    localStorage.setItem("memberId", data.memberId.toString());
    console.log("Stored memberId:", data.memberId);
    localStorage.setItem("email", data.sub);
  } catch (error) {
    console.error("Invalid token", error);
  }
};
