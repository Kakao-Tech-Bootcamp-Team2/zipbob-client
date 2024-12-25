import * as S from "./SelectButton.styled";

interface SelectButtonProps {
  title: string;
  onClickButton: () => void;
  isUnder?: boolean;
}

export const SelectButton = ({
  title,
  onClickButton,
  isUnder,
}: SelectButtonProps) => {
  return (
    <S.SelectButton onClick={onClickButton} $isUnder={isUnder}>
      {title}
    </S.SelectButton>
  );
};
