import { instance } from "./instance";
import { createIngredient } from "../utils/createIngredientPayload";

export const postIngredients = async () => {
  try {
    const payload = createIngredient(); // 위에서 작성한 함수 호출
    console.log("Payload to send:", payload);

    const response = await instance.post("/ingredients", payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      },
    });

    console.log("Server Response:", response.data);
    alert("데이터가 성공적으로 전송되었습니다!");
  } catch (error: any) {
    if (error.response) {
      // 서버에서 반환한 응답이 있는 경우
      const statusCode = error.response.status;

      if (statusCode === 409) {
        // 이미 등록된 재료
        alert("이미 등록된 재료입니다.");
      } else {
        // 그 외 모든 에러 처리
        alert("에러가 발생했습니다. 다시 시도해주세요.");
      }
    } else {
      // 네트워크 문제 등 기타 에러
      console.error("Error sending data:", error);
      alert("에러가 발생했습니다. 다시 시도해주세요.");
    }
  }
};
