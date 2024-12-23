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

// CATEGORY 객체 정의
export const CATEGORY: CategoryType = {
  FRUIT_VEGETABLE: {
    APPLE: { name: "사과", unitType: "COUNT" },
    BANANA: { name: "바나나", unitType: "COUNT" },
    ORANGE: { name: "오렌지", unitType: "COUNT" },
    GRAPE: { name: "포도", unitType: "GRAM" },
    CUCUMBER: { name: "오이", unitType: "COUNT" },
    TOMATO: { name: "토마토", unitType: "COUNT" },
    CARROT: { name: "당근", unitType: "GRAM" },
    POTATO: { name: "감자", unitType: "GRAM" },
    BROCCOLI: { name: "브로콜리", unitType: "GRAM" },
    LETTUCE: { name: "상추", unitType: "GRAM" },
    SPINACH: { name: "시금치", unitType: "GRAM" },
    ZUCCHINI: { name: "애호박", unitType: "GRAM" },
    EGGPLANT: { name: "가지", unitType: "GRAM" },
    PINEAPPLE: { name: "파인애플", unitType: "COUNT" },
    STRAWBERRY: { name: "딸기", unitType: "GRAM" },
    PEACH: { name: "복숭아", unitType: "COUNT" },
    MANGO: { name: "망고", unitType: "COUNT" },
    LEMON: { name: "레몬", unitType: "COUNT" },
    KIWI: { name: "키위", unitType: "COUNT" },
    BLUEBERRY: { name: "블루베리", unitType: "GRAM" },
  },
  MEAT: {
    CHICKEN: { name: "닭고기", unitType: "GRAM" },
    BEEF: { name: "소고기", unitType: "GRAM" },
    PORK: { name: "돼지고기", unitType: "GRAM" },
    LAMB: { name: "양고기", unitType: "GRAM" },
    DUCK: { name: "오리고기", unitType: "GRAM" },
    TURKEY: { name: "칠면조", unitType: "GRAM" },
    BACON: { name: "베이컨", unitType: "GRAM" },
    SAUSAGE: { name: "소시지", unitType: "GRAM" },
    HAM: { name: "햄", unitType: "GRAM" },
    SALMON: { name: "연어", unitType: "GRAM" },
    TUNA: { name: "참치", unitType: "GRAM" },
    SHRIMP: { name: "새우", unitType: "GRAM" },
    CRAB: { name: "게", unitType: "GRAM" },
  },
  PROCESSED_FOOD: {
    TOFU: { name: "두부", unitType: "GRAM" },
    NOODLES: { name: "면", unitType: "GRAM" },
    CANNED_TUNA: { name: "참치캔", unitType: "COUNT" },
    BREAD: { name: "빵", unitType: "COUNT" },
    RICE_CAKE: { name: "떡", unitType: "GRAM" },
    SPAM: { name: "스팸", unitType: "COUNT" },
    FISH_CAKE: { name: "어묵", unitType: "GRAM" },
    CURRY_POWDER: { name: "카레가루", unitType: "GRAM" },
    PASTA: { name: "파스타", unitType: "GRAM" },
    PIZZA_BASE: { name: "피자 도우", unitType: "COUNT" },
  },
  DAIRY: {
    MILK: { name: "우유", unitType: "LITER" },
    CHEESE: { name: "치즈", unitType: "GRAM" },
    BUTTER: { name: "버터", unitType: "GRAM" },
    YOGURT: { name: "요거트", unitType: "LITER" },
    WHIPPED_CREAM: { name: "휘핑크림", unitType: "LITER" },
    ICE_CREAM: { name: "아이스크림", unitType: "LITER" },
    CREAM_CHEESE: { name: "크림치즈", unitType: "GRAM" },
    EVAPORATED_MILK: { name: "연유", unitType: "LITER" },
  },
  SEASONING_SAUCE: {
    SALT: { name: "소금", unitType: "GRAM" },
    SUGAR: { name: "설탕", unitType: "GRAM" },
    SOY_SAUCE: { name: "간장", unitType: "LITER" },
    VINEGAR: { name: "식초", unitType: "LITER" },
    SESAME_OIL: { name: "참기름", unitType: "LITER" },
    PEPPER: { name: "후추", unitType: "GRAM" },
    RED_PEPPER_FLAKES: { name: "고추가루", unitType: "GRAM" },
    GARLIC: { name: "마늘", unitType: "GRAM" },
    GINGER: { name: "생강", unitType: "GRAM" },
    KETCHUP: { name: "케찹", unitType: "LITER" },
    MAYONNAISE: { name: "마요네즈", unitType: "LITER" },
    MUSTARD: { name: "머스타드", unitType: "LITER" },
    CHILI_SAUCE: { name: "칠리소스", unitType: "LITER" },
    BARBECUE_SAUCE: { name: "바베큐소스", unitType: "LITER" },
    OYSTER_SAUCE: { name: "굴소스", unitType: "LITER" },
    FISH_SAUCE: { name: "액젓", unitType: "LITER" },
    CURRY_PASTE: { name: "카레 페이스트", unitType: "GRAM" },
  },
};

export const CATEGORY_TITLE = [
  { key: "FRUIT_VEGETABLE", title: "야채/과일" },
  { key: "MEAT", title: "육류" },
  { key: "PROCESSED_FOOD", title: "가공식품" },
  { key: "DAIRY", title: "유제품" },
  { key: "SEASONING_SAUCE", title: "조미료/소스" },
] as const;
