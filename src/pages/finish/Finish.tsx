import styled from "styled-components";

const MENU = ["두부", "고기", "김치", "소금"];

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

const EndingMsg = styled.div`
  position: absolute;
  top: 7%;
  border: 3px solid #d0d0d0;
  padding: 2rem 1rem;
  transform: rotate(2deg);

  background: #fff;
  font-family: "BM-HANNA";
  font-size: 1.5rem;
`;

const Img = styled.img`
  position: absolute;
  bottom: -80%;
  left: -10%;
`;

const MenuZone = styled.div`
  margin-top: 40%;
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  gap: 1rem;
`;

const MenuTitle = styled.div`
  color: #4160b8;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
`;

const ChipZone = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Chip = styled.div`
  display: flex;
  padding: 2px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #e6e6e6;
  width: 100px;
  height: 40px;
  font-family: "BM-HANNA";
`;

const FinishMsg = styled.div`
  position: absolute;
  bottom: 15%;
  right: 5%;
  border: 3px solid #d0d0d0;
  padding: 1rem;
  transform: rotate(0.5deg);

  background: #fff;
  font-family: "BM-HANNA";
  font-size: 1.5rem;
  cursor: pointer;
`;

const ReviewZone = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  gap: 1rem;
`;

const ReviewTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  border: 1px solid #d0d0d0;
  border-radius: 0.5rem;
  padding: 1rem;
`;

const StarZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Finish = () => {
  return (
    <Layout>
      <EndingMsg>
        오늘의 레시피, 김치찌개 은(는) 어떠셨나요?
        <Img src="/images/finish.svg" />
      </EndingMsg>
      <MenuZone>
        <MenuTitle>
          오늘의 레시피를 통해 아래의 식재료들을 사용했어요.
        </MenuTitle>
        <ChipZone>
          {MENU.map((item, index) => (
            <Chip key={index}>{item}</Chip>
          ))}
        </ChipZone>
      </MenuZone>
      <ReviewZone>
        <MenuTitle>리뷰와 별점을 등록해주세요.(선택) </MenuTitle>
        <StarZone>
          <img src="/images/star.svg" alt="별점" />
          <img src="/images/star.svg" alt="별점" />
          <img src="/images/star.svg" alt="별점" />
          <img src="/images/star.svg" alt="별점" />
          <img src="/images/star.svg" alt="별점" />
        </StarZone>
        <ReviewTextArea placeholder="리뷰를 써주세요." />
      </ReviewZone>
      <FinishMsg onClick={() => (window.location.href = "/")}>
        재료 삭제 후 요리 끝내기
      </FinishMsg>
    </Layout>
  );
};
