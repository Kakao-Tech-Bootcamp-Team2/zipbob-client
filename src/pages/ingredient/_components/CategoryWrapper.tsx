import styled from "styled-components";
import { CATEGORY } from "../../../constants/category";
import { useIngredientStore } from "../../../store/ingredientStore"; // Zustand 스토어 가져오기

const Wrapper = styled.div`
  width: 90%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-bottom: 1rem;
  background-color: white;
  border-radius: 1rem;
`;

const Title = styled.div`
  font-family: "BM-HANNA";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`;

const IngredientWrapper = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 10px;
`;

const IngredientItem = styled.div<{ $isSelected: boolean }>`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  font-family: "BM-HANNA";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 10px;
  background: #f6f8ff;
  cursor: pointer;
  transition: background-color 0.2s ease;

  border: ${({ $isSelected }) => ($isSelected ? "2px solid #2800D8" : "none")};
`;

type CategoryKeys = keyof typeof CATEGORY; // CATEGORY의 키만 허용

interface CategoryProps {
  title: string; // 제목
  categoryKey: CategoryKeys; // CATEGORY의 키
}

export const IngredientCategory = ({ title, categoryKey }: CategoryProps) => {
  const { selectedItems, toggleItem } = useIngredientStore(); // Zustand 스토어에서 상태 가져오기

  return (
    <Wrapper>
      <Title>{title}</Title>
      <IngredientWrapper>
        {Object.values(CATEGORY[categoryKey]).map((ingredient, index) => (
          <IngredientItem
            key={index}
            $isSelected={selectedItems.includes(ingredient.name)} // 선택된 상태 확인
            onClick={() => {
              toggleItem(categoryKey, ingredient.name); // 선택/해제 동작
              console.log(ingredient.name);
            }}
          >
            {ingredient.name}
          </IngredientItem>
        ))}
      </IngredientWrapper>
    </Wrapper>
  );
};
