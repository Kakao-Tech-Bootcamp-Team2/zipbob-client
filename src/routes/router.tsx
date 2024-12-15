import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layout/defaultLayout";
import HomePage from "../pages/HomePage";      // 메인 페이지 컴포넌트
import LoginPage from "../pages/LoginPage";  // 리뷰 페이지 컴포넌트
import Recipes from "../pages/Recipes";
import Community from "../pages/Community";
import Bookmark from "../pages/Bookmark";
import Mypage from "../pages/Mypage";

export const router = createBrowserRouter([
  {
    path: "",
    element: <DefaultLayout />,
    children: [
      {
        //path: "/",
        // element: <App />,
      },
      {
        path: "/",                // 메인 페이지 경로
        element: <HomePage />,    // 메인 페이지 컴포넌트
      },
      {
        path: "/login",         // 로그인 페이지 경로
        element: <LoginPage />,  // 리뷰 페이지 컴포넌트
      },
      {
        path: "/recipes",         // 추천 레시피 페이지 경로
        element: <Recipes />,  // 추천 레시피 페이지 컴포넌트
      },
      {
        path: "/community",         // 커뮤니티 페이지 경로
        element: <Community />,  // 커뮤니티 페이지 컴포넌트
      },
      {
        path: "/bookmark",         // 북마크 페이지 경로
        element: <Bookmark />,  // 북마크 페이지 컴포넌트
      },
      {
        path: "/mypage",         // 북마크 페이지 경로
        element: <Mypage />,  // 북마크 페이지 컴포넌트
      },
    ],
  },
]);
