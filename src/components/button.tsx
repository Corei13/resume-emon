import { styled } from "@stitches/react";

export const PrimaryButton = styled("button", {
  backgroundColor: "$violet",
  border: "0",
  borderRadius: "6px",
  height: "$space$40",
  margin: "auto",
  alignItems: "center",
  color: "$white",
});

export const SecondaryButton = styled("button", {
  backgroundColor: "$white",
  border: "1px solid $gray300",
  borderRadius: "6px",
  height: "$space$40",
  margin: "auto",
  alignItems: "center",
  color: "$gray500",
});
