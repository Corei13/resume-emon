import { styled } from "@stitches/react";

export const Button = styled("button", {
  borderRadius: "6px",
  height: "$space$40",
  alignItems: "center",
  cursor: "pointer",
  variants: {
    type: {
      deepBlue: {
        margin: "auto",
        backgroundColor: "$deepBlue",
        color: "$white",
        border: "0",
      },
      white: {
        margin: "auto",
        backgroundColor: "$white",
        color: "$gray500",
        border: "1px solid $gray300",
      },
      miniActive: {
        height: "$space$48",
        paddingX: "$space$10",
        color: "$gray900",
        border: "0",
        backgroundColor: "$gray150",
      },
      miniDeactive: {
        height: "$space$48",
        paddingX: "$space$10",
        color: "$gray500",
        border: "0",
        backgroundColor: "$gray150",
      },
    },
  },
});
