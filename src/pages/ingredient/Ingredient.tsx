import * as S from "./Ingredient.styled";
import { Title } from "../../components/title/Title";
import { SelectButton } from "../../components/selectButton/SelectButton";
import { CATEGORY_TITLE } from "../../constants/category";
import { IngredientCategory } from "./_components/CategoryWrapper";

export const Ingredient = () => {
  return (
    <S.Layout>
      <Title
        url="images/egg.svg"
        title="식재료 관리"
        $top="2%"
        $imageTop="-90%"
        $right="-30%"
      />
      <SelectButton
        title={"선택 완료"}
        onClickButton={() => console.log("test")}
      />
      <S.CategoryContainer>
        {CATEGORY_TITLE.map(({ key, title }, index) => (
          <IngredientCategory key={index} title={title} categoryKey={key} />
        ))}
      </S.CategoryContainer>
    </S.Layout>
  );
};
