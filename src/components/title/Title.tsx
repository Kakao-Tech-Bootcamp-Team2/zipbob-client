import * as S from "./Title.styled";

interface TitleProps {
  url: string;
  title: string;
  $top: string;
}

export const Title: React.FC<TitleProps> = ({ url, title, $top }) => {
  return (
    <S.TitleWrapper $top={$top}>
      {title}
      <S.ImgLabel src={url} />
    </S.TitleWrapper>
  );
};
