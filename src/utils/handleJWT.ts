interface UserData {
  exp: number;
  iat: number;
  memberId: number;
  role: string;
  sub: string; // 이메일
}

export const handleParseJwt = (): void => {
  try {
    // 토큰 가져오기
    const token = localStorage.getItem("ACCESS_TOKEN") || "";
    console.log("Token:", token);

    if (!token) {
      console.error("No token found");
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
    localStorage.setItem("email", data.sub); // 이메일 저장
    console.log("Stored memberId:", data.memberId);
    console.log("Stored email:", data.sub);

    // URL에 이메일이 있다면 확인 및 저장
    const params = new URLSearchParams(window.location.search);
    const emailFromUrl = params.get("email");
    if (emailFromUrl) {
      localStorage.setItem("email", emailFromUrl); // URL 이메일로 덮어쓰기
      console.log("Updated email from URL:", emailFromUrl);
    }
  } catch (error) {
    console.error("Invalid token", error);
  }
};
