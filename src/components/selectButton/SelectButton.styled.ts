import styled from "styled-components";

interface SelectButtonProps {
  $isUnder?: boolean;
}

export const SelectButton = styled.button<SelectButtonProps>`
  position: absolute;
  top: ${({ $isUnder }) => ($isUnder ? "10%" : "5%")};
  right: -10%;
  width: 150px;
  height: 40px;
  padding: 0 1rem;
  transform: rotate(-3deg);
  border: 3px solid #d0d0d0;

  background: #fff;
  color: #ababab;

  text-align: left;
  font-family: "BM-HANNA";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;
`;
