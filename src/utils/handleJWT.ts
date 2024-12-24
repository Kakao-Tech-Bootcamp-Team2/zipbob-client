interface UserData {
  exp: number;
  iat: number;
  memberId: number;
  role: string;
  sub: string;
}

export const handleParseJwt = (): void => {
  try {
    // ACCESS_TOKEN 가져오기
    const token = localStorage.getItem("ACCESS_TOKEN") || "";
    console.log("Token:", token);

    if (!token) {
      console.error("No ACCESS_TOKEN found in localStorage.");
      return;
    }

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

    // memberId와 email 저장
    localStorage.setItem("memberId", data.memberId.toString());
    console.log("Stored memberId:", data.memberId);
    localStorage.setItem("email", data.sub);
    console.log("Stored email:", data.sub);

    // nickname 저장 (URL에서 추출)
    const params = new URLSearchParams(window.location.search);
    const nickname = params.get("nickname");
    if (nickname) {
      localStorage.setItem("nickname", nickname);
      console.log("Stored nickname:", nickname);
    } else {
      console.warn("No nickname found in the URL.");
    }
  } catch (error) {
    console.error("Invalid token", error);
  }
};
