import { styled } from "@stitches/react";

export const Button = styled("button", {
  borderRadius: "$space$6",
  height: "$space$40",
  alignItems: "center",
  cursor: "pointer",
  variants: {
    type: {
      blue900: {
        margin: "auto",
        backgroundColor: "$blue900",
        color: "$white",
        border: "0",
      },
      white: {
        margin: "auto",
        backgroundColor: "$white",
        color: "$gray500",
        border: "$space$1 solid $gray300",
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
