type Font = {
  fontFamily: string;
  fontSize: string;
  fontStyle: string;
  fontWeight: string;
  lineHeight: string;
};

type Theme = {
  fonts: {
    [key: string]: Font;
  };
  colors: {
    [key: string]: string;
  };
};

const fontGenerator = (
  fontFamily: string,
  fontSize: string,
  fontStyle: string,
  fontWeight: string,
  lineHeight: string
): Font => ({ fontFamily, fontSize, fontStyle, fontWeight, lineHeight });
export const theme: Theme = {
  fonts: {
    h1: fontGenerator("Baloo Bhaina", "50px", "normal", "400", "80px"),
    b1: fontGenerator("BM HANNA", "16px", "normal", "bold", "20px"),
  },
  colors: {
    background: "#F6F8FF",
  },
};
