import { Typography } from "@src/components/typography";
import { styled } from "@stitches/react";

const Button = styled("button", {
  backgroundColor: "$violet",
  border: "0",
  borderRadius: "6px",
  height: "$space$40",
  margin: "auto",
  alignItems: "center",
});

export const PrimaryButon = ({
  width,
  label,
}: {
  width: string;
  label: string;
}) => {
  return (
    <Button css={{ width: `${width}` }}>
      <Typography variant="Small" color="$white">
        {label}
      </Typography>
    </Button>
  );
};
