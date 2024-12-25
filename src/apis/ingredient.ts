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
  } catch (error) {
    console.error("Error sending data:", error);
    alert("데이터 전송 중 오류가 발생했습니다.");
  }
};
