import { instance } from "./instance";

// interface NewUserResponse {
//   email: string;
//   nickname: string;
//   role: string;
//   socialType: string;
// }

// 최초 access token 받는 부분은 소셜로그인 이후 -> 그 이후 해당 OAuth 추가 가입인 해당 API 호출 -> 이후에 냉장고 생성까지 연쇄적으로 진행

export const patchNewUser = async (nickname: string) => {
  try {
    const res = await instance.patch("/members/oauth2/join", {
      nickname,
    });

    console.log(res);
    localStorage.setItem("nickname", nickname);
  } catch (err) {
    console.log(err);
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
    const res = await instance.get("/members/myinfo");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

// 가입 시! -> true / false에 따라 버튼 상태 관리할거니까 커스텀 훅으로 빼도 좋을듯
export const getNicknameStatus = async (nickname: string) => {
  try {
    const res = await instance.get(`/members/nickname-check/${nickname}`);
    console.log(res);
    // boolean
  } catch (err) {
    console.log(err);
  }
};
