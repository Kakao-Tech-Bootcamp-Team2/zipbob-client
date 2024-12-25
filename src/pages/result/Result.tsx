import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/title/Title";
import { SelectButton } from "../../components/selectButton/SelectButton";
import { useState } from "react";

const MENU = ["두부", "고기", "김치", "소금"];
const RESULT = ["두부김치전", "김치찌개", "두부김치"];
const TIME = ["25분", "30분", "20분"];
const REVIEW_COUNT = ["5개", "2개", "4개"];
const IMAGE = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcYLqv6TcbBRxZl6H9DtAoup0cmN3-bqD7A&s",
  "https://i.namu.wiki/i/8drgvI-cQLUfJDC00zbl2ZolK4W3o4ZkVSpR-zM5FZk_QzT58vYnx_7ohk0qwGYYiSLPiZgwccyIEFUtYKDjUQ.webp",
  "https://i.namu.wiki/i/XQWO5vnRw9XMQZkiKj528Xh3ug0XzYD4dhp3-7shU5EZ78lcAV0_a7Jh2ZhpAxx5gORqS_vxeAQqTuYc0-zHsg.webp",
];
const COLOR = ["#F1ECCF", "#F1CFCF", "#F1E4CF", "#CFF1E0"];

interface ColorProps {
  $color: string;
}

interface ClickProps {
  $isClicked: boolean;
}

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

const MenuResult = styled.div<ClickProps>`
  max-width: 520px;
  height: 150px;
  width: 90%;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 1rem;
  border: ${({ $isClicked }) => ($isClicked ? "1.5px solid #4160B8" : "none")};
  cursor: pointer;
`;

const MenuData = styled.div`
  padding: 1rem;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 1rem;
`;

const TitleZone = styled.div`
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SelectZone = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TitleMsg = styled.p`
  text-align: center;
  font-family: "BM-HANNA";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
`;

const DetailZone = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
`;

const MenuChip = styled.div<ColorProps>`
  display: flex;
  font-family: "BM-HANNA";

  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;

  background: ${({ $color }) => $color};
`;

export const Result = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState<boolean[]>([false, false, false]);

  return (
    <Layout>
      <Title
        url="/images/recipe.svg"
        title="레시피 추천받기"
        $top="5%"
        $imageTop="-90%"
        $right="-25%"
      />
      <SelectButton
        title={"메뉴 선택"}
        onClickButton={() => navigate("/menu")}
        isUnder={true}
      />
      <div style={{ marginBottom: "30%" }}></div>
      {RESULT.map((result, index) => (
        <MenuResult
          onClick={() => {
            let data = [...isClicked];
            data[index] = !isClicked[index];
            setIsClicked(data);
            console.log(isClicked);
          }}
          $isClicked={isClicked[index]}
        >
          <MenuData>
            <TitleZone>
              <TitleMsg>{result}</TitleMsg>
              <DetailZone>
                <p
                  style={{
                    textAlign: "right",
                    fontFamily: "BM-HANNA",
                  }}
                >
                  예상 시간 : {TIME[index]}
                </p>
                <p
                  style={{
                    textAlign: "right",
                    fontFamily: "BM-HANNA",
                  }}
                >
                  리뷰 : {REVIEW_COUNT[index]}
                </p>
              </DetailZone>
            </TitleZone>
            <SelectZone>
              {MENU.map((menu, index) => (
                <MenuChip $color={COLOR[index]} key={index}>
                  {menu}
                </MenuChip>
              ))}
            </SelectZone>
          </MenuData>
          <Img src={IMAGE[index]} />
        </MenuResult>
      ))}
    </Layout>
  );
};
