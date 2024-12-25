import { create } from "zustand";

interface SimpleIngredientStore {
  memberId: number | null; // 사용자 ID
  ingredients: string[]; // 선택된 재료 리스트
  setMemberId: (id: number) => void; // 사용자 ID 설정
  toggleIngredient: (ingredient: string) => void; // 재료 추가/삭제 토글
  getPayload: () => { memberId: number; ingredients: string[] }; // 서버로 보낼 페이로드 생성
}

export const useSimpleIngredientStore = create<SimpleIngredientStore>(
  (set, get) => ({
    memberId: null,
    ingredients: [],

    // memberId 설정
    setMemberId: (id) => set({ memberId: id }),

    // 재료 추가/삭제 토글
    toggleIngredient: (ingredient) => {
      set((state) => {
        const isSelected = state.ingredients.includes(ingredient);
        return {
          ingredients: isSelected
            ? state.ingredients.filter((item) => item !== ingredient) // 이미 선택된 경우 제거
            : [...state.ingredients, ingredient], // 선택되지 않은 경우 추가
        };
      });
    },

    // 서버로 보낼 페이로드 생성
    getPayload: () => {
      const { memberId, ingredients } = get();
      if (!memberId) throw new Error("memberId가 설정되지 않았습니다.");
      return { memberId, ingredients };
    },
  })
);
