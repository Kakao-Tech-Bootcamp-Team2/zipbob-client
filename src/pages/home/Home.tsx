import * as S from "./Home.styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CATEGORY_TITLE, CATEGORY } from "../../constants/category";
import { useIngredientStore } from "../../store/ingredientStore";

export const Home = () => {
  const navigate = useNavigate();
  const { selectedItems, quantities, expiredDates } = useIngredientStore();

  useEffect(() => {
    console.log("냉장고 데이터:", selectedItems, quantities, expiredDates);
  }, [selectedItems, quantities, expiredDates]);

  return (
    <S.Layout>
      <S.Title>{`${localStorage.getItem("nickname")}의 냉장고`}</S.Title>
      <S.MenuZone>
        {selectedItems.length > 0 ? (
          <S.MenuBox>
            {CATEGORY_TITLE.map(({ title }, categoryIndex) => (
              <>
                <S.Label key={categoryIndex}>{title}</S.Label>
                <S.ItemContainer key={categoryIndex}>
                  {Object.values(CATEGORY[CATEGORY_TITLE[categoryIndex].key])
                    .filter((ingredient) =>
                      selectedItems.includes(ingredient.name)
                    )
                    .map((ingredient, itemIndex) => {
                      const quantity = quantities[ingredient.name] || 0;
                      const expirationDate =
                        expiredDates[ingredient.name] || "";
                      const isExpired =
                        new Date(expirationDate + 1) < new Date(); // 유통기한 검사

                      // 유닛 타입을 한국어로 변환
                      const localizedUnit =
                        ingredient.unitType === "GRAM"
                          ? "g"
                          : ingredient.unitType === "LITER"
                          ? "L"
                          : ingredient.unitType === "COUNT"
                          ? "개"
                          : "";

                      return (
                        <S.MenuItem key={itemIndex} isExpired={isExpired}>
                          {ingredient.name} {quantity}
                          {localizedUnit}
                          {isExpired && " (유통기한 만료)"}
                        </S.MenuItem>
                      );
                    })}
                </S.ItemContainer>
              </>
            ))}
          </S.MenuBox>
        ) : (
          <S.NoMenu>
            <img src="/images/none.svg" alt="" />
            <S.Title>텅...</S.Title>
            <S.moveToIngredientBtn
              onClick={() => {
                navigate("/ingredient/1");
              }}
            >
              냉장고 채우러 가기
            </S.moveToIngredientBtn>
          </S.NoMenu>
        )}
      </S.MenuZone>
    </S.Layout>
  );
};
