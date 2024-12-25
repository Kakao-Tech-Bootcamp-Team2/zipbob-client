import styled from "styled-components";

interface MenuItemProps {
  isExpired: boolean; // 유통기한이 지난 항목인지 여부를 나타내는 props
}

export const Layout = styled.div`
  margin: 1rem 0;
  max-width: 520px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  /* justify-content: space-around; */
`;

export const Title = styled.div`
  font-family: "BM-HANNA";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const NoMenu = styled.div`
  height: 100%;
  min-height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MenuZone = styled.div`
  width: 90%;
  border-radius: 10px;
  border: 5px solid #d0d0d0;
  background: white;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;

  padding: 2rem;
  min-height: 80vh;
`;

export const moveToIngredientBtn = styled.button`
  margin-top: 2rem;
  border-radius: 10px;
  border: 5px solid #d0d0d0;
  padding: 1rem;
  /* background: white; */
  font-family: "BM-HANNA";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.p`
  font-family: "BM-HANNA";
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const MenuItem = styled.div<MenuItemProps>`
  display: flex;
  width: 120px;

  /* background-color: ${({ isExpired }) =>
    isExpired ? "#ffe6e6" : "#f8f8f8"}; */
  color: ${({ isExpired }) => (isExpired ? "#ff0000" : "#000")};
  /* border: 1px solid ${({ isExpired }) =>
    isExpired ? "#ff0000" : "#ccc"}; */

  font-family: "BM-HANNA";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding: 0.5rem;
  justify-content: center;
  border-radius: 0.5rem;
  background: #f6f8ff;
`;
