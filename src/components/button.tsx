import { styled } from "@stitches/react";

export const Button = styled("button", {
  borderRadius: "6px",
  height: "$space$40",
  margin: "auto",
  alignItems: "center",
  cursor: "pointer",
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

export const MiniButton = styled("button", {
  height: "$space$48",
  paddingX: "$space$10",
  color: "$gray500",
  border: "0",
  backgroundColor: "$gray150",
  cursor: "pointer",
  variants: {
    active: {
      true: {
        color: "$gray900",
      },
    },
  },
});
