import { create } from "zustand";

interface IngredientStore {
  selectedItems: string[]; // 선택된 아이템들
  toggleItem: (ingredient: string) => void; // 아이템 선택/해제
}

export const useIngredientStore = create<IngredientStore>((set) => ({
  selectedItems: [], // 초기 상태
  toggleItem: (ingredient) =>
    set((state) => {
      // 아이템 선택/해제 로직
      const isSelected = state.selectedItems.includes(ingredient);
      console.log(ingredient, state.selectedItems);
      return {
        selectedItems: isSelected
          ? state.selectedItems.filter((item) => item !== ingredient) // 제거
          : [...state.selectedItems, ingredient], // 추가
      };
    }),
}));
