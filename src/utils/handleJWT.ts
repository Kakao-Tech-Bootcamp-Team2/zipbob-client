interface UserData {
  exp: number;
  iat: number;
  memberId: number;
  role: string;
  sub: string;
}

export const handleParseJwt = (): void => {
  try {
    // const token: string = localStorage.getItem("token") || "";
    const token = import.meta.env.VITE_TEST_TOKEN;
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    const data: UserData = JSON.parse(jsonPayload);
    localStorage.setItem("memberId", data.memberId.toString());
  } catch (error) {
    console.error("Invalid token", error);
  }
};
