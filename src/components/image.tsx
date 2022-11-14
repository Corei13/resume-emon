import { styled } from "@src/stitches.config";

export const StyledImage = styled("img", {
  maxWidth: "100%",
  height: "auto",

  variants: {
    circle: {
      true: {
        borderRadius: "100%",
      },
      false: {},
    },
    rounded: {
      true: {
        borderRadius: "$space$8",
      },
      false: {},
    },
  },
});
