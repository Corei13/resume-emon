import { XStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import { theme } from "@src/stitches.config";
import { TNavButton } from "@src/types";

const Selected = () => {
  return (
    <svg
      width="3"
      height="22"
      viewBox="0 0 3 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0C1.65685 0 3 1.34315 3 3V19C3 20.6569 1.65685 22 0 22V0Z"
        fill="#526DFC"
      />
    </svg>
  );
};

export const NavButton = (props: TNavButton) => {
  const leftMargin = props.isSelected ? "17px" : "20px";

  return (
    <XStack alignItems="center" css={{ width: "100%" }}>
      {props.isSelected && <Selected />}
      <XStack
        space={"$10"}
        css={{ marginLeft: leftMargin, alignItems: "center" }}
      >
        {props.icon}
        <Typography
          variant="sm"
          color={`${
            props.isSelected ? theme.colors.blue900 : theme.colors.gray500
          }`}
        >
          {props.label}
        </Typography>
      </XStack>
    </XStack>
  );
};
