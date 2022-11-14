import { styled, CSS } from "@src/stitches.config";
import React, { forwardRef } from "react";

const CLASS_NAME = "--stack";

const StyledStack = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  // overflow: "auto",
  boxSizing: "border-box",

  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
    grow: {
      true: {
        flexGrow: 1,
      },
      false: {},
    },
    wrap: {
      true: {
        flexWrap: "wrap",
      },
      false: {},
    },
    sticky: {
      true: {
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "$coal100",
      },
      false: {},
    },
    DEV_outline: {
      true: {
        outline: "2px solid rgba(0, 0, 255, 0.4)",
        [`& .${CLASS_NAME}`]: {
          outline: "2px solid rgba(0, 0, 255, 0.4)",
        },
      },
      false: {},
    },
  },
  compoundVariants: [],
});

type Props = {
  direction: "row" | "column";
  splitAfter?: number;
  alignItems?: "center" | "start" | "end" | "normal";
  space?: number | string;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-evenly"
    | "space-around";
  padding?:
    | number
    | string
    | [number | string, number | string]
    | [number | string, number | string, number | string]
    | [number | string, number | string, number | string, number | string];
  css?: CSS;
  grow?: boolean;
  wrap?: boolean;
  sticky?: boolean;
  DEV_outline?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Stack = forwardRef<HTMLDivElement, React.PropsWithChildren<Props>>(
  (
    {
      children,
      space = 0,
      direction,
      alignItems = "normal",
      justifyContent = "flex-start",
      padding = 0,
      css = {},
      ...props
    },
    ref
  ) => {
    const paddingArray = Array.isArray(padding) ? padding : [padding];

    return (
      <StyledStack
        ref={ref}
        className={CLASS_NAME}
        css={{
          gap: space,

          alignItems,
          justifyContent,

          padding: paddingArray[0],
          paddingBlock: paddingArray[1],
          paddingLeft: paddingArray[2],
          paddingBottom: paddingArray[3],

          ...css,
        }}
        direction={direction}
        {...props}
        DEV_outline={
          process.env.NODE_ENV === "development" ? props.DEV_outline : false
        }
      >
        {children}
      </StyledStack>
    );
  }
);

const XStack = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<Omit<Props, "direction">>
>((props, ref) => <Stack ref={ref} direction="row" {...props} />);

const YStack = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<Omit<Props, "direction">>
>((props, ref) => <Stack ref={ref} direction="column" {...props} />);

export { XStack, YStack };
