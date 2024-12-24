import { instance } from "./instance";
import { postRefrigerators } from "./refrigerators";

// interface NewUserResponse {
//   email: string;
//   nickname: string;
//   role: string;
//   socialType: string;
// }

// 최초 access token 받는 부분은 소셜로그인 이후 -> 그 이후 해당 OAuth 추가 가입인 해당 API 호출 -> 이후에 냉장고 생성까지 연쇄적으로 진행

interface NicknameStatusResponse {
  isValid: boolean;
}
export const patchNewUser = async (nickname: string) => {
  try {
    const res = await instance.patch("/members/oauth2/join", { nickname });

    // 등록 완료 메시지
    console.log(res);
    alert(`등록 완료: ${nickname}`);

    // 냉장고 데이터 전송
    await postRefrigerators();
  } catch (err) {
    console.error("Error while patching new user:", err);

    // 사용자에게 에러 피드백
    alert("등록 중 문제가 발생했습니다. 다시 시도해주세요.");
  }
};

export const patchNickname = async (newNickname: string) => {
  try {
    const res = await instance.patch("/members/update", {
      newNickname,
    });
    console.log(res);
    localStorage.setItem("nickname", newNickname);
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async () => {
  try {
    const nickname = localStorage.getItem("nickname");
    const res = await instance.delete("/members/withdraw", {
      data: {
        nickname,
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const getUserInfo = async () => {
  try {
    const res = await instance.get("/members/myInfo");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

// 가입 시! -> true / false에 따라 버튼 상태 관리할거니까 커스텀 훅으로 빼도 좋을듯
export const getNicknameStatus = async (
  nickname: string
): Promise<NicknameStatusResponse> => {
  try {
    const res = await instance.get<NicknameStatusResponse>(
      `/members/nickname-check/${nickname}`
    );
    if (!res.data) {
      localStorage.setItem("nickname", nickname);
      alert("사용 가능한 닉네임입니다!");
    } else {
      alert("사용 중인 닉네임입니다. 다시 확인해주세요!");
    }
    return res.data;
  } catch (err) {
    return err as any; // 타입 오류를 방지
  }
};

export const patchLogout = async (nickname: string) => {
  const res = await instance.patch(`/auth/logout`, {
    nickname,
  });
  console.log(res);
};

// export const patchNewAccessToken = async (token: string) => {
//   const res = await instance.patch(
//     "/auth/reissue",
//     {},
//     {
//       headers: {
//         Refresh: localStorage.getItem("REFRESH_TOKEN"),
//       },
//     }
//   );
//   console.log(res);
// };
