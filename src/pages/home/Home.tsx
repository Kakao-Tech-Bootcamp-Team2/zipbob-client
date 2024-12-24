import { useEffect } from "react";
import { handleParseJwt } from "../../utils/handleJWT";

export const Home = () => {
  useEffect(() => {
    handleParseJwt();
  }, []);
  return <></>;
};
