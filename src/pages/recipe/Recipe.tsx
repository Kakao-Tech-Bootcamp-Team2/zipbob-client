import * as S from "./Recipe.styled";
import * as HS from "../home/Home.styled";
import { CATEGORY_TITLE, CATEGORY } from "../../constants/category";
import { Title } from "../../components/title/Title";
import { SelectButton } from "../../components/selectButton/SelectButton";
import { useIngredientStore } from "../../store/ingredientStore";
import { useSimpleIngredientStore } from "../../store/selectRecipeStore";
import { useEffect } from "react";

export const Recipe = () => {
  const { selectedItems, quantities, expiredDates } = useIngredientStore();
  const { setMemberId, toggleIngredient, getPayload, ingredients } =
    useSimpleIngredientStore();

  useEffect(() => {
    // 로컬 스토리지에서 memberId 설정
    setMemberId(parseInt(localStorage.getItem("memberId") || "1", 10));
  }, [setMemberId]);

  return (
    <S.Layout>
      <Title
        url="/images/recipe.svg"
        title="레시피 추천받기"
        $top="5%"
        $imageTop="-90%"
        $right="-25%"
      />
      <SelectButton
        title={"선택 완료"}
        onClickButton={() => {
          const payload = getPayload(); // 선택된 데이터로 payload 생성
          console.log("Payload:", payload);
          alert("레시피 추천 요청: " + JSON.stringify(payload, null, 2));
        }}
        isUnder={true}
      />
      <div style={{ marginBottom: "30%" }}></div>
      <HS.MenuZone>
        {selectedItems.length > 0 ? (
          <HS.MenuBox>
            {CATEGORY_TITLE.map(({ title }, categoryIndex) => (
              <div key={categoryIndex}>
                <HS.Label
                  style={{
                    marginBottom: "1rem",
                  }}
                >
                  {title}
                </HS.Label>
                <HS.ItemContainer>
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
                        <HS.MenuItem
                          style={{
                            cursor: "pointer",
                          }}
                          key={itemIndex}
                          $isSelected={ingredients.includes(ingredient.name)} // 상태 확인
                          $isExpired={isExpired}
                          onClick={() => {
                            toggleIngredient(ingredient.name); // 상태 업데이트
                          }}
                        >
                          {ingredient.name} {quantity}
                          {localizedUnit}
                          {isExpired && " (유통기한 만료)"}
                        </HS.MenuItem>
                      );
                    })}
                </HS.ItemContainer>
              </div>
            ))}
          </HS.MenuBox>
        ) : (
          <HS.NoMenu>
            <img src="/images/none.svg" alt="" />
            <HS.Title>텅...</HS.Title>
            <HS.moveToIngredientBtn
              onClick={() => {
                alert("냉장고 채우러 가기");
              }}
            >
              냉장고 채우러 가기
            </HS.moveToIngredientBtn>
          </HS.NoMenu>
        )}
      </HS.MenuZone>
    </S.Layout>
  );
};
