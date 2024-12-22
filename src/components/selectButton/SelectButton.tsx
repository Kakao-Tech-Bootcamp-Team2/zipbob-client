import * as S from "./SelectButton.styled";

interface SelectButtonProps {
  title: string;
  onClickButton: () => void;
}

export const SelectButton = ({ title, onClickButton }: SelectButtonProps) => {
  return <S.SelectButton onClick={onClickButton}>{title}</S.SelectButton>;
};
