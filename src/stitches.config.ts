import { createStitches } from "@stitches/react";

export { type CSS } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: "#fff",
      primary: "#526DFC",
      primary80: "#526DFCCC",
      primary50: "#526DFC80",
      primary20: "#526DFC33",
      primary10: "#526DFC1A",
      primary5: "#526DFC0D",
      gray900: "#0A182A",
      gray800: "#253242",
      gray700: "#404B59",
      gray600: "#5C6571",
      gray500: "#8D959E",
      gray400: "#B1B8C3",
      gray300: "#D6D9DE",
      gray200: "#EEEFF0",
      gray150: "#F8F8F8",
      gray100: "#F9FAFB",
      red500: "#F44E6C",
      pdfBg: "#525659",
      blue900: "#526DFC",
      blue800: "#264F9E",
      blue100: "#DFECFF",
      yellow800: "#CC9300",
      yellow100: "#FFF5DB",
      violet900: "7336DE",
      violet100: "#E8DBFF",
      lavender: "#526dfc0d",
      orange: "#F2994A",
    },
    space: {
      1: "0.063rem",
      2: "0.125rem",
      4: "0.25rem",
      6: "0.375rem",
      8: "0.5rem",
      10: "0.625rem",
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      22: "1.375rem",
      24: "1.5rem",
      26: "1.625rem",
      28: "1.75rem",
      30: "1.875",
      32: "2rem",
      36: "2.25rem",
      38: "2.375rem",
      40: "2.5rem",
      46: "2.875rem",
      48: "3rem",
      50: "3.125rem",
      52: "3.25rem",
      54: "3.375rem",
      56: "3.5rem",
      60: "3.75rem",
      64: "4rem",
      68: "4.25rem",
      70: "4.375rem",
      72: "4.5rem",
      80: "5rem",
      90: "5.625rem",
      96: "6rem",
      122: "7.625rem",
      124: "7.75rem",
      128: "8rem",
      134: "8.375rem",
      140: "8.75rem",
      158: "9.875rem",
      160: "10rem",
      170: "10.625rem",
      178: "11.125rem",
      180: "11.25rem",
      246: "15.375rem",
      252: "15.75rem",
      256: "16rem",
      284: "17.75rem",
      300: "18.75rem",
      320: "20rem",
      322: "20.125rem",
      350: "21.875rem",
      448: "28rem",
      518: "32.375rem",
      532: "33.25rem",
      580: "36.25rem",
      650: "40.625rem",
    },
    fontSizes: {
      xxs: "0.625rem" /* 10px */,
      xs: "0.75rem" /* 12px */,
      sm: "0.875rem" /* 14px */,
      base: "1rem" /* 16px */,
      md: "1rem" /* 16px */,
      lg: "1.125rem" /* 18px */,
      xl: "1.25rem" /* 20px */,
      xxl: "1.5rem" /* 24px */,
    },
    headingSizes: {
      h1: "3.125rem" /* 50px */,
      h2: "2.5rem" /* 40px */,
      h3: "2.125rem" /* 34px */,
      h4: "1.5rem" /* 24px */,
      h5: "1.375rem" /* 22px */,
      h6: "1.125rem" /* 18px */,
      h7: "1rem" /* 16px */,
    },
    lineHeights: {
      xxs: "0.8125rem" /* 13px */,
      xs: "0.875rem" /* 14px */,
      sm: "0.9375rem" /* 15px */,
      md: "1.125rem" /* 18px */,
    },
    fonts: {
      sans: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
      mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono','DejaVu Sans Mono', 'Bitstream Vera Sans Mono' ",
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    marginX: (value: any) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: any) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value: any) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: any) => ({ paddingTop: value, paddingBottom: value }),
  },
});
