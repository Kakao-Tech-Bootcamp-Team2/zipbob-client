import axios, { AxiosError, AxiosRequestConfig } from "axios";

// Axios 인스턴스 생성
export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true, // 쿠키, 인증 정보 허용
});

// 새로운 Access Token 요청 함수
const refreshAccessToken = async (): Promise<string | null> => {
  try {
    const refreshToken = localStorage.getItem("REFRESH_TOKEN");
    if (!refreshToken) {
      throw new Error("Refresh Token이 없습니다.");
    }

    const response = await axios.patch(
      `${import.meta.env.VITE_BASE_URL}/auth/reissue`,
      {},
      {
        headers: {
          Refresh: refreshToken,
        },
        withCredentials: true, // 쿠키 포함
      }
    );

    const { accessToken, refreshToken: newRefreshToken } = response.data;

    // 새 토큰 저장
    if (accessToken) {
      localStorage.setItem("ACCESS_TOKEN", accessToken);
    }

    if (newRefreshToken) {
      localStorage.setItem("REFRESH_TOKEN", newRefreshToken);
    }

    return accessToken || null;
  } catch (error) {
    console.error("Access Token 갱신 실패:", error);
    return null;
  }
};

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => response, // 성공적인 응답은 그대로 반환
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    // originalRequest가 존재하지 않으면 에러 반환
    if (!originalRequest) {
      return Promise.reject(error);
    }

    // 401 Unauthorized 에러 처리
    if (
      error.response?.status === 401 &&
      !originalRequest._retry // 무한 반복 방지
    ) {
      originalRequest._retry = true; // 재시도 플래그 설정

      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${newAccessToken}`,
        };
        return instance(originalRequest); // 원래 요청 재시도
      } else {
        console.error("새로운 Access Token을 가져오지 못했습니다.");
        localStorage.clear(); // 모든 저장된 정보 삭제
        window.location.href = "/login"; // 로그인 페이지로 리디렉션
      }
    }

    return Promise.reject(error); // 다른 에러는 그대로 반환
  }
);
