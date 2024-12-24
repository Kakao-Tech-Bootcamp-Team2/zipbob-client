import { useEffect } from "react";
import { handleParseJwt } from "../../utils/handleJWT";
import { useExtractTokens } from "../../hooks/useExtractTokens";

export const Home = () => {
  useExtractTokens("home");
  useEffect(() => {
    handleParseJwt();
  }, []);
  return <></>;
};
