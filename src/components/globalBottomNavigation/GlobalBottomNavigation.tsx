import { useLocation, useNavigate } from "react-router-dom"; // React Router의 useLocation 사용
import * as S from "./GlobalBottomNavigation.styled";

export const GlobalBottomNavigation = () => {
  const location = useLocation(); // 현재 URL 경로 가져오기
  const navigate = useNavigate();
  // 현재 URL에 따라 isActive 결정
  const isActive = (path: string) => location.pathname === path;

  return (
    <S.Layout>
      <S.NavigationItem
        src="/images/homeItem.svg"
        $isActive={isActive("/home")} // "/home" 경로 활성화
        onClick={() => navigate("/home")}
      />
      <S.NavigationItem
        src="/images/ingredientItem.svg"
        $isActive={["/ingredient/1", "/ingredient/2"].some((path) =>
          isActive(path)
        )}
        onClick={() => navigate("/ingredient/1")}
      />
      <S.NavigationItem
        src="/images/recipeItem.svg"
        $isActive={isActive("/recipe")} // "/recipe" 경로 활성화
        onClick={() => navigate("/recipe")}
      />
      <S.NavigationItem
        src="/images/myInfoItem.svg"
        $isActive={isActive("/myinfo")} // "/myinfo" 경로 활성화
        onClick={() => navigate("/myinfo")}
      />
    </S.Layout>
  );
};
