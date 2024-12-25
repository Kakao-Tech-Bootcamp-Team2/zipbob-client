import * as S from "./Ingredient.styled";
import { Title } from "../../components/title/Title";
import { SelectButton } from "../../components/selectButton/SelectButton";
import { useNavigate } from "react-router-dom";
import { SelectCard } from "./_components/SelectCard";
import { useIngredientStore } from "../../store/ingredientStore";
// import { postIngredients } from "../../apis/ingredient";
import { useToast } from "../../hooks/useToast";
import { ToastContainer } from "../../components/toast/Toast";

export const Select = () => {
  const { showToast, toast } = useToast();

  const navigate = useNavigate();
  const { selectedItems } = useIngredientStore();

  const handleEnroll = async () => {
    // await postIngredients();
    showToast("등록 완료");

    setTimeout(() => {
      navigate(`/home`);
    }, 1500);
  };

  return (
    <>
      {toast.visible && <ToastContainer>{toast.message}</ToastContainer>}
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
    </>
  );
};
