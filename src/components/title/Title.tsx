import * as S from "./Title.styled";

interface TitleProps {
  url: string;
  title: string;
  $top: string;
  $imageTop: string;
  $right?: string;
}

export const Title: React.FC<TitleProps> = ({
  url,
  title,
  $top,
  $imageTop,
  $right,
}) => {
  return (
    <S.TitleWrapper $top={$top}>
      {title}
      <S.ImgLabel src={url} $imageTop={$imageTop} $right={$right || "-20%"} />
    </S.TitleWrapper>
  );
};
