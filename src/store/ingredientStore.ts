import { create } from "zustand";
import { CATEGORY } from "../constants/category";

// 유닛 타입 정의
type UnitType = "COUNT" | "GRAM" | "LITER";

// 각 카테고리의 아이템 타입 정의
interface CategoryItem {
  name: string;
  unitType: UnitType;
}

// 카테고리 타입 정의
interface CategoryType {
  FRUIT_VEGETABLE: Record<string, CategoryItem>;
  MEAT: Record<string, CategoryItem>;
  PROCESSED_FOOD: Record<string, CategoryItem>;
  DAIRY: Record<string, CategoryItem>;
  SEASONING_SAUCE: Record<string, CategoryItem>;
}

// payload 타입 정의
interface PayloadItem {
  ingredient: string;
  quantity: number;
  expiredDate: string;
}

// Zustand Store 정의
interface IngredientStore {
  CATEGORY: CategoryType;
  selectedItems: string[];
  quantities: Record<string, number>;
  expiredDates: Record<string, string>;

  toggleItem: (category: keyof CategoryType, ingredient: string) => void;
  setQuantity: (ingredient: string, quantity: number) => void;
  setExpiredDate: (ingredient: string, date: string) => void;
}

export const useIngredientStore = create<IngredientStore>((set) => ({
  CATEGORY, // CATEGORY 데이터를 스토어에 포함
  selectedItems: [],
  quantities: {},
  expiredDates: {},

  toggleItem: (ingredient) =>
    set((state) => {
      const isSelected = state.selectedItems.includes(ingredient);
      const today = new Date().toISOString().split("T")[0];

      if (isSelected) {
        const { [ingredient]: _, ...newQuantities } = state.quantities;
        const { [ingredient]: __, ...newExpiredDates } = state.expiredDates;
        return {
          selectedItems: state.selectedItems.filter(
            (item) => item !== ingredient
          ),
          quantities: newQuantities,
          expiredDates: newExpiredDates,
        };
      } else {
        return {
          selectedItems: [...state.selectedItems, ingredient],
          quantities: { ...state.quantities, [ingredient]: 1 },
          expiredDates: { ...state.expiredDates, [ingredient]: today },
        };
      }
    }),

  setQuantity: (ingredient, quantity) =>
    set((state) => ({
      quantities: { ...state.quantities, [ingredient]: quantity },
    })),

  setExpiredDate: (ingredient, date) =>
    set((state) => ({
      expiredDates: { ...state.expiredDates, [ingredient]: date },
    })),
}));

// payload 생성
export const usePayload = () => {
  const { selectedItems, quantities, expiredDates } = useIngredientStore();

  const payload: PayloadItem[] = selectedItems.map((item) => ({
    ingredient: item,
    quantity: quantities[item] || 0,
    expiredDate: expiredDates[item] || "",
  }));

  return payload;
};
