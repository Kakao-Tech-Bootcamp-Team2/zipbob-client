import { useState } from "react";
import styled from "styled-components";
import { DatePicker } from "../../../components/datePicker/DatePicker";
import { useIngredientStore } from "../../../store/ingredientStore";

const CardContainer = styled.div`
  display: flex;
  font-family: "BM-HANNA";
`;

const AmountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 50%;
  width: 30%;
  color: #000;
  padding: 1rem;
  font-family: "BM-HANNA";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

const SubTitle = styled.div`
  font-family: "BM-HANNA";
  font-size: 1rem;
  font-style: normal;
  font-weight: 200;
`;

const CheckZone = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #d0d0d0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

interface SelectCardProps {
  title: string;
}

export const SelectCard = ({ title }: SelectCardProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const { quantities, setQuantity, setExpiredDate } = useIngredientStore();

  const currentQuantity = quantities[title] || 1;

  // 한국 시간으로 포맷하는 함수 사용
  const handleDateChange = (newDate: Date) => {
    const koreanDate = toKoreanDate(newDate); // 한국 시간으로 변환
    setStartDate(newDate);
    setExpiredDate(title, koreanDate); // 스토어에 저장
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0.5rem",
        height: "150px",
        width: "95%",
        backgroundColor: "white",
        borderRadius: "1rem",
      }}
    >
      <CardContainer>
        <Title>{title}</Title>
        <div
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <AmountContainer>
            <SubTitle>용량</SubTitle>
            <CheckZone>
              <button
                disabled={currentQuantity < 2}
                onClick={() => setQuantity(title, currentQuantity - 1)}
              >
                -
              </button>
              <div>{`${currentQuantity}L/g/개`}</div>
              <button onClick={() => setQuantity(title, currentQuantity + 1)}>
                +
              </button>
            </CheckZone>
          </AmountContainer>
        </div>
      </CardContainer>
      <div
        style={{
          display: "flex",
        }}
      >
        <DatePicker startDate={startDate} setStartDate={handleDateChange} />
      </div>
      <div
        style={{
          marginTop: "0.5rem",
          textAlign: "center",
          fontFamily: "BM-HANNA",
          fontSize: "0.875rem",
        }}
      ></div>
    </div>
  );
};

// 한국 시간으로 변환하는 함수
const toKoreanDate = (date: Date): string => {
  const offset = date.getTimezoneOffset() * 60000; // 밀리초 단위 오프셋 계산
  const koreanTime = new Date(date.getTime() + offset + 9 * 60 * 60000); // 한국 시간으로 변환

  const year = koreanTime.getFullYear();
  const month = String(koreanTime.getMonth() + 1).padStart(2, "0");
  const day = String(koreanTime.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`; // YYYY-MM-DD 형식 반환
};
