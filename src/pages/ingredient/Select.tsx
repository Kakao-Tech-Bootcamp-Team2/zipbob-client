import * as S from "./Ingredient.styled";
import { Title } from "../../components/title/Title";
import { SelectButton } from "../../components/selectButton/SelectButton";
import { useNavigate } from "react-router-dom";
import { SelectCard } from "./_components/SelectCard";
import { useIngredientStore } from "../../store/ingredientStore";
import { CATEGORY } from "../../constants/category";

// 유닛 타입 정의
type UnitType = "COUNT" | "GRAM" | "LITER";

// 각 카테고리의 아이템 타입 정의
interface CategoryItem {
  name: string;
  unitType: UnitType;
}

export const Select = () => {
  const navigate = useNavigate();
  const { selectedItems, quantities, expiredDates } = useIngredientStore();

  const handleEnroll = () => {
    if (selectedItems.length === 0) {
      alert("선택된 항목이 없습니다.");
      return;
    }

    // payload 생성
    const payload = selectedItems.map((item) => {
      // CATEGORY에서 unitType 추출
      const category = Object.values(CATEGORY).find((categoryItems) =>
        Object.values(categoryItems as Record<string, CategoryItem>).some(
          (categoryItem) => categoryItem.name === item
        )
      );

      const unitType = category
        ? Object.values(category as Record<string, CategoryItem>).find(
            (categoryItem) => categoryItem.name === item
          )?.unitType
        : "COUNT"; // 기본값 "COUNT"

      return {
        ingredient: item,
        quantity: quantities[item] || 0, // 기본값 0
        expiredDate: expiredDates[item] || "", // 기본값 빈 문자열
        unitType, // unitType 추가
      };
    });

    alert(`등록 완료: ${JSON.stringify(payload, null, 2)}`);
    navigate("/home");
  };

  return (
    <S.Layout
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      <Title
        url="/images/egg.svg"
        title="식재료 관리"
        $top="2%"
        $imageTop="-90%"
        $right="-30%"
      />
      <SelectButton title={"냉장고 넣기"} onClickButton={handleEnroll} />
      <div style={{ marginBottom: "25%" }}></div>
      {selectedItems.length > 0 ? (
        selectedItems.map((item, index) => (
          <SelectCard key={index} title={item} />
        ))
      ) : (
        <p>선택된 항목이 없습니다.</p>
      )}
    </S.Layout>
  );
};
