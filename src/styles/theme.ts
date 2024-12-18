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
    test: fontGenerator("test", "test", "test", "test", "test"),
  },
  colors: {
    background: "#F6F8FF",
  },
};
