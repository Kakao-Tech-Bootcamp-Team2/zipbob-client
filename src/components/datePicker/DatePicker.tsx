import Select from "react-select";
import styled from "styled-components";

const PickerWrapper = styled.div`
  display: flex;
  font-family: "BM-HANNA";

  margin-top: 0.5rem;
  justify-content: end;
  align-items: center;
  width: 100%;
  max-width: 500px;
  gap: 6px;
`;

const SubTitle = styled.div`
  font-family: "BM-HANNA";
  font-size: 1rem;
  font-style: normal;
  font-weight: 200;
`;

const customStyles = {
  control: (base: any) => ({
    ...base,
    fontSize: "0.7rem",
    border: "1px solid #d9d9d9",
    borderRadius: "8px",
    padding: "2px",
    textAlign: "center",
  }),
  menu: (base: any) => ({
    ...base,
    zIndex: 9999, // Ensure the menu stays on top of other elements
  }),
};

// Props 타입 정의
interface DatePickerProps {
  startDate: Date; // 선택된 날짜
  setStartDate: (date: Date) => void; // 날짜 변경 함수
}

// React-Select 옵션 타입 정의
interface SelectOption {
  value: number;
  label: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  startDate,
  setStartDate,
}) => {
  // 연도는 2024년부터 100년간 생성
  const years: SelectOption[] = Array.from({ length: 100 }, (_, i) => ({
    value: 2024 + i,
    label: `${2024 + i}년`,
  }));

  const months: SelectOption[] = Array.from({ length: 12 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}월`,
  }));

  const days: SelectOption[] = Array.from({ length: 31 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}일`,
  }));

  const handleYearChange = (selectedOption: SelectOption | null) => {
    if (!selectedOption) return;
    const newDate = new Date(startDate);
    newDate.setFullYear(selectedOption.value);
    setStartDate(newDate);
  };

  const handleMonthChange = (selectedOption: SelectOption | null) => {
    if (!selectedOption) return;
    const newDate = new Date(startDate);
    newDate.setMonth(selectedOption.value - 1);
    setStartDate(newDate);
  };

  const handleDayChange = (selectedOption: SelectOption | null) => {
    if (!selectedOption) return;
    const newDate = new Date(startDate);
    newDate.setDate(selectedOption.value);
    setStartDate(newDate);
  };

  return (
    <PickerWrapper>
      <SubTitle>유통기한</SubTitle>
      <Select
        options={years}
        value={{
          value: startDate.getFullYear(),
          label: `${startDate.getFullYear()}년`,
        }}
        onChange={handleYearChange}
        styles={customStyles}
        placeholder="연도"
      />
      <Select
        options={months}
        value={{
          value: startDate.getMonth() + 1,
          label: `${startDate.getMonth() + 1}월`,
        }}
        onChange={handleMonthChange}
        styles={customStyles}
        placeholder="월"
      />
      <Select
        options={days}
        value={{
          value: startDate.getDate(),
          label: `${startDate.getDate()}일`,
        }}
        onChange={handleDayChange}
        styles={customStyles}
        placeholder="일"
      />
    </PickerWrapper>
  );
};
