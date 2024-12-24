import { useEffect } from "react";
import { getUserInfo } from "../../apis/auth";

export const MyInfo = () => {
  useEffect(() => {
    getUserInfo();
  }, []);
  return <></>;
};
