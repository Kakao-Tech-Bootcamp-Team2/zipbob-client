import * as S from "./Ingredient.styled";
import { Title } from "../../components/title/Title";

export const Ingredient = () => {
  return (
    <S.Layout>
      <Title
        url="images/egg.svg"
        title="식재료 관리"
        $top="5%"
        $imageTop="-90%"
        $right="-30%"
      />
    </S.Layout>
  );
};
