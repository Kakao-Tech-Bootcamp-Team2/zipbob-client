import styled from "styled-components";

interface TitleWrapperProps {
  $top?: string;
}

interface ImageProps {
  $imageTop?: string;
}

export const TitleWrapper = styled.div<TitleWrapperProps>`
  position: absolute;
  top: ${({ $top }) => $top || "0px"};
  left: 5%;
  width: 174px;
  height: 56px;
  transform: rotate(2deg);
  border: 3px solid #d0d0d0;
  background-color: white;
  color: black;
  font-family: "BM-HANNA";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgLabel = styled.img<ImageProps>`
  position: absolute;
  top: ${({ $imageTop }) => $imageTop || "0px"};
  right: -20%;
`;
