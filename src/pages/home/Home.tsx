import * as S from "./Home.styled";
import { useExtractTokens } from "../../hooks/useExtractTokens";
import { useEffect, useState } from "react";
import { getRefrigerators } from "../../apis/refrigerators";
import { useNavigate } from "react-router-dom";
import { CATEGORY_TITLE } from "../../constants/category";
import { MOCK_REF } from "../../constants/mock";

export const Home = () => {
  const [data, setData] = useState<string[]>([]);
  const navigate = useNavigate();
  useExtractTokens();
  useEffect(() => {
    const fetchData = async () => {
      await getRefrigerators();
    };
    setData([...data]);
    fetchData();
  }, []);
  return (
    <S.Layout>
      <S.Title>{`${localStorage.getItem("nickname")}의 냉장고`}</S.Title>
      <S.MenuZone>
        {data.length > 0 ? (
          <S.MenuBox>
            {CATEGORY_TITLE.map(({ title }, categoryIndex) => (
              <>
                <S.Label key={categoryIndex}>{title}</S.Label>
                <S.ItemContainer>
                  {MOCK_REF[categoryIndex].map((item, itemIndex) => (
                    <S.MenuItem key={itemIndex}>
                      {item.name} {item.quantity}
                    </S.MenuItem>
                  ))}
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
