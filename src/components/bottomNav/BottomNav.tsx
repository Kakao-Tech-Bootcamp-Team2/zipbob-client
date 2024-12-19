import styled from "styled-components";

const Layout = styled.div`
  background-color: white;
  position: fixed;
  bottom: 0;
  display: flex;
  max-width: 520px;

  width: 100%;
  padding: 10px 25px;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
`;

const IconImage = styled.img`
  width: 30px;
`;

// active text color #4160B8
// non-active text color #7D8EC3

export const BottomNav = () => {
  return (
    <Layout>
      <IconContainer>
        <IconImage src="/images/refrigerator_icon.svg" />
        <p>내 냉장고</p>
      </IconContainer>
      <IconContainer>
        <IconImage src="/images/recipe_icon.svg" />
        <p>추천 레시피</p>
      </IconContainer>
      <IconContainer>
        <IconImage src="/images/bookmark_icon.svg" />
        <p>북마크</p>
      </IconContainer>
      <IconContainer>
        <IconImage src="/images/community_icon.svg" />
        <p>커뮤니티</p>
      </IconContainer>
    </Layout>
  );
};
