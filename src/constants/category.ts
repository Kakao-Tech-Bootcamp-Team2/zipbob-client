export const CATEGORY = {
  FRUIT_VEGETABLE: {
    APPLE: "사과",
    BANANA: "바나나",
    ORANGE: "오렌지",
    GRAPE: "포도",
    CUCUMBER: "오이",
    TOMATO: "토마토",
    CARROT: "당근",
    POTATO: "감자",
    BROCCOLI: "브로콜리",
    LETTUCE: "상추",
    SPINACH: "시금치",
    ZUCCHINI: "애호박",
    EGGPLANT: "가지",
    PINEAPPLE: "파인애플",
    STRAWBERRY: "딸기",
    PEACH: "복숭아",
    MANGO: "망고",
    LEMON: "레몬",
    KIWI: "키위",
    BLUEBERRY: "블루베리",
  },
  MEAT: {
    CHICKEN: "닭고기",
    BEEF: "소고기",
    PORK: "돼지고기",
    LAMB: "양고기",
    DUCK: "오리고기",
    TURKEY: "칠면조",
    BACON: "베이컨",
    SAUSAGE: "소시지",
    HAM: "햄",
    SALMON: "연어",
    TUNA: "참치",
    SHRIMP: "새우",
    CRAB: "게",
  },
  PROCESSED_FOOD: {
    TOFU: "두부",
    NOODLES: "면",
    CANNED_TUNA: "참치캔",
    BREAD: "빵",
    RICE_CAKE: "떡",
    SPAM: "스팸",
    FISH_CAKE: "어묵",
    CURRY_POWDER: "카레가루",
    PASTA: "파스타",
    PIZZA_BASE: "피자 도우",
  },
  DAIRY: {
    MILK: "우유",
    CHEESE: "치즈",
    BUTTER: "버터",
    YOGURT: "요거트",
    WHIPPED_CREAM: "휘핑크림",
    ICE_CREAM: "아이스크림",
    CREAM_CHEESE: "크림치즈",
    EVAPORATED_MILK: "연유",
  },
  SEASONING_SAUCE: {
    SALT: "소금",
    SUGAR: "설탕",
    SOY_SAUCE: "간장",
    VINEGAR: "식초",
    SESAME_OIL: "참기름",
    PEPPER: "후추",
    RED_PEPPER_FLAKES: "고추가루",
    GARLIC: "마늘",
    GINGER: "생강",
    KETCHUP: "케찹",
    MAYONNAISE: "마요네즈",
    MUSTARD: "머스타드",
    CHILI_SAUCE: "칠리소스",
    BARBECUE_SAUCE: "바베큐소스",
    OYSTER_SAUCE: "굴소스",
    FISH_SAUCE: "액젓",
    CURRY_PASTE: "카레 페이스트",
  },
} as const;

export const CATEGORY_TITLE = [
  { key: "FRUIT_VEGETABLE", title: "야채/과일" },
  { key: "MEAT", title: "육류" },
  { key: "PROCESSED_FOOD", title: "가공식품" },
  { key: "DAIRY", title: "유제품" },
  { key: "SEASONING_SAUCE", title: "조미료/소스" },
] as const;

//   // 사용 예시
//   const milk = CATEGORY.DAIRY.MILK.name; // "우유"
//   const salt = CATEGORY.SEASONING_SAUCE.SALT.name; // "소금"
//   const chicken = CATEGORY.MEAT.CHICKEN.name; // "닭고기"
//   const apple = CATEGORY.FRUIT_VEGETABLE.APPLE.name; // "사과"

//   // console.log로 출력
//   console.log(milk); // "우유"
//   console.log(salt); // "소금"
//   console.log(chicken); // "닭고기"
//   console.log(apple); // "사과"
