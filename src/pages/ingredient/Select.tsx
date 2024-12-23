import * as S from "./Ingredient.styled";
import { Title } from "../../components/title/Title";
import { SelectButton } from "../../components/selectButton/SelectButton";
import { useNavigate } from "react-router-dom";
import { SelectCard } from "./_components/SelectCard";
import { useIngredientStore } from "../../store/ingredientStore"; // zustand store import

export const Select = () => {
  const navigate = useNavigate();
  const { selectedItems } = useIngredientStore(); // zustand에서 selectedItems 가져오기

  const handleEnroll = () => {
    if (selectedItems.length === 0) {
      alert("선택된 항목이 없습니다."); // 선택된 아이템이 없을 경우 알림
      return;
    }
    alert(`등록 완료: ${selectedItems.join(", ")}`); // 선택된 항목을 표시
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
          <SelectCard key={index} title={item} /> // SelectCard에 title로 전달
        ))
      ) : (
        <p>선택된 항목이 없습니다.</p> // 선택된 아이템이 없을 경우 표시
      )}
    </S.Layout>
  );
};
