import { styled } from "@src/stitches.config";
import { CSS } from "@stitches/react/types/css-util";

const makeIconPath = (name: string) => {
  return `/assets/icons/${name}.svg`;
};

const StyledIcon = styled("img", {
  color: "$primary",

  variants: {
    size: {
      base: {
        width: "18px",
        height: "auto",
      },
      sm: {
        width: "12px",
        height: "auto",
      },
    },
  },
  defaultVariants: {
    size: "base",
  },
});

export type IconName =
  | "add"
  | "expand"
  | "logo"
  | "pdf"
  | "pdf_black"
  | "save"
  | "down"
  | "expand_black"
  | "minus"
  | "profile"
  | "skills"
  | "educations"
  | "experiences"
  | "profile_black"
  | "skills_black"
  | "educations_black"
  | "experiences_black"
  | "monitor"
  | "monitor_black"
  | "projects"
  | "projects_black"
  | "up"
  | "myResume"
  | "resume"
  | "challenges"
  | "backIcon";

type IconProps = {
  name: IconName;
  size?: "base" | "sm";
  css?: CSS;
  onClick?: () => void;
};

export const Icon = ({ name, ...props }: IconProps) => {
  return <StyledIcon {...props} src={makeIconPath(name)} />;
};
