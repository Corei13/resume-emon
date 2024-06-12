import { styled } from "@stitches/react";

export const Button = styled("button", {
  borderRadius: "6px",
  height: "$space$40",
  margin: "auto",
  alignItems: "center",
  variants: {
    type: {
      violet: {
        backgroundColor: "$violet",
        color: "$white",
        border: "0",
      },
      white: {
        backgroundColor: "$white",
        color: "$gray500",
        border: "1px solid $gray300",
      },
    },
  },
});
