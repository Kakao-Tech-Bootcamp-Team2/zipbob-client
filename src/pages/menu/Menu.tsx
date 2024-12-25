import styled from "styled-components";
import * as HS from "../home/Home.styled";
import { SelectButton } from "../../components/selectButton/SelectButton";
import { useNavigate } from "react-router-dom";

interface ColorProps {
  $color: string;
}
const MENU = ["두부", "고기", "김치", "소금"];

const IMAGE =
  "https://i.namu.wiki/i/8drgvI-cQLUfJDC00zbl2ZolK4W3o4ZkVSpR-zM5FZk_QzT58vYnx_7ohk0qwGYYiSLPiZgwccyIEFUtYKDjUQ.webp";
const COLOR = ["#F1ECCF", "#F1CFCF", "#F1E4CF", "#CFF1E0"];

const RECIPE = [
  "Step 1: 냄비에 참기름을 두르고, 고기를 넣어 중불에서 볶아줍니다.",
  "Step 2: 고기가 반쯤 익으면 김치를 넣고 함께 볶아줍니다.",
  "Step 3: 고춧가루와 다진 마늘을 추가해 김치가 충분히 익도록 2~3분 정도 볶아줍니다.",
  "Step 4: 물을 붓고 끓어오르면 중약불로 줄여 10분 정도 끓입니다.",
  "Step 5: 두부를 먹기 좋은 크기로 썰어 넣고, 소금과 후추로 간을 맞춥니다.",
  "Step 6: 한소끔 더 끓인 후 완성합니다.",
];

const Layout = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-width: 520px;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const BackButton = styled.img`
  position: absolute;
  top: 5%;
  left: 5%;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  max-width: 520px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  height: 200px;
`;

const DataZone = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ImageZone = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 1rem;
`;

const TitleZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  text-align: center;
  font-family: "BM-HANNA";
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
`;

const ChipZone = styled.div`
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const MenuChip = styled.div<ColorProps>`
  height: 40%;
  width: 35%;
  display: flex;
  font-family: "BM-HANNA";

  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;

  background: ${({ $color }) => $color};
`;

const RecipeZone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const RTitle = styled.div`
  font-family: "BM-HANNA";
`;

const RContent = styled.div`
  display: flex;
  flex-direction: column;

  flex-direction: center;
  gap: 0.5rem;
`;

const Finish = styled.div`
  position: absolute;
  font-family: "BM-HANNA";
  font-size: 1.5rem;
  padding: 1rem;
  bottom: 15%;
  right: 10%;
  width: 100px;
  border: 3px solid #d0d0d0;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Menu = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <BackButton src="/images/back.svg" onClick={() => navigate(-1)} />
      <SelectButton
        title={"리뷰 보기"}
        onClickButton={() => navigate("/review")}
        isUnder={true}
      />
      <div
        style={{
          marginBottom: "5rem",
        }}
      ></div>
      <HS.MenuZone>
        <Container>
          <DataZone>
            <TitleZone>김치찌개</TitleZone>
            <ChipZone>
              {MENU.map((menu, index) => (
                <MenuChip $color={COLOR[index]} key={index}>
                  {menu}
                </MenuChip>
              ))}
            </ChipZone>
          </DataZone>
          <ImageZone src={IMAGE} />
        </Container>
        <RecipeZone>
          <RTitle>레시피</RTitle>
          <RContent>
            {RECIPE.map((content) => (
              <div>{content}</div>
            ))}
          </RContent>
        </RecipeZone>
      </HS.MenuZone>
      <Finish onClick={() => navigate("/finish")}>완성</Finish>
    </Layout>
  );
};
