import { useState } from "react";
import styled from "styled-components";
import { DatePicker } from "../../../components/datePicker/DatePicker";

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
  const [mount, setMount] = useState<number>(1);
  const [startDate, setStartDate] = useState(new Date());
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
              <button disabled={mount < 2} onClick={() => setMount(mount - 1)}>
                -
              </button>
              <div>{`${mount}L/g/개`}</div>
              <button onClick={() => setMount(mount + 1)}>+</button>
            </CheckZone>
          </AmountContainer>
        </div>
      </CardContainer>
      <div
        style={{
          display: "flex",
        }}
      >
        <DatePicker startDate={startDate} setStartDate={setStartDate} />
      </div>
    </div>
  );
};
