import { CATEGORY } from "../constants/category";
import { useIngredientStore } from "../store/ingredientStore";

type UnitType = "COUNT" | "GRAM" | "LITER";

interface CategoryItem {
  name: string;
  unitType: UnitType;
}

// 유틸 함수
export const createIngredient = (): {
  memberId: number;
  ingredientTypes: string[]; // 영어 이름
  quantities: number[];
  unitTypes: string[];
  expiredDates: string[];
} => {
  const { selectedItems, quantities, expiredDates } =
    useIngredientStore.getState(); // Zustand 스토어의 상태 가져오기
  const memberId = parseInt(localStorage.getItem("memberId") || "0", 10); // 로컬 스토리지에서 memberId 가져오기

  const ingredientTypes: string[] = [];
  const unitTypes: string[] = [];

  // 선택된 아이템을 기준으로 영어 이름과 유닛 타입 추출
  selectedItems.forEach((item) => {
    let found = false;

    for (const category of Object.values(CATEGORY) as Record<
      string,
      CategoryItem
    >[]) {
      // 타입 단언 추가
      for (const [key, value] of Object.entries(category) as [
        string,
        CategoryItem
      ][]) {
        // 타입 단언 추가
        if (value.name === item) {
          ingredientTypes.push(key); // 영어 이름 추가
          unitTypes.push(value.unitType); // 유닛 타입 추가
          found = true;
          break;
        }
      }
      if (found) break;
    }

    // 매칭되지 않을 경우 기본값 처리
    if (!found) {
      ingredientTypes.push("UNKNOWN");
      unitTypes.push("UNKNOWN");
    }
  });

  // 수량과 유통기한 추출
  const quantityValues = selectedItems.map((item) => quantities[item] || 0); // 수량 가져오기
  const expirationDates = selectedItems.map((item) => expiredDates[item] || ""); // 유통기한 가져오기

  // 최종 페이로드 반환
  return {
    memberId,
    ingredientTypes,
    quantities: quantityValues,
    unitTypes,
    expiredDates: expirationDates,
  };
};
