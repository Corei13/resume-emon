import { styled, CSS } from "@src/stitches.config";
import { PropsWithChildren } from "react";

const StyledText = styled("span", {
  color: "$gray900",
  fontWeight: "$regular",
  fontSize: "$md",
  wordBreak: "break-word",

  variants: {
    variant: {
      h1: {
        fontSize: "$headingSizes$h1",
        fontWeight: "$bold",
      },
      h2: {
        fontSize: "$headingSizes$h2",
        fontWeight: "$bold",
      },
      h3: {
        fontSize: "$headingSizes$h3",
        fontWeight: "$bold",
      },
      h4: {
        fontSize: "$headingSizes$h4",
        fontWeight: "$bold",
      },
      h5: {
        fontSize: "$headingSizes$h5",
        fontWeight: "$bold",
      },
      h6: {
        fontSize: "$headingSizes$h6",
        fontWeight: "$bold",
      },
      h7: {
        fontSize: "$headingSizes$h7",
        fontWeight: "$bold",
      },
      xxl: {
        fontSize: "$xxl",
      },
      xl: {
        fontSize: "$xl",
      },
      lg: {
        fontSize: "$lg",
      },
      md: {
        fontSize: "$md",
      },
      sm: {
        fontSize: "$sm",
        lineHeight: "$sm",
      },
      xs: {
        fontSize: "$xs",
        lineHeight: "$xs",
      },
      xxs: {
        fontSize: "$xxs",
        lineHeight: "$xxs",
      },
      Large: {
        fontSize: "$xxl",
      },
      Default: {
        fontSize: "$lg",
      },
      Small: {
        fontSize: "$sm",
      },
    },

    fontWeight: {
      bold: {
        fontWeight: "$bold",
      },
      regular: {
        fontWeight: "$regular",
      },
      medium: {
        fontWeight: "$medium",
      },
    },

    showEllipsis: {
      true: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      false: {},
    },

    lineClamp: {
      true: {
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        whiteSpace: "pre-line",
      },
      false: {},
    },

    spread: {
      true: {
        wordSpacing: "0.0625rem",
        letterSpacing: "0.0225rem",
      },
      false: {},
    },
  },
});

type Props = {
  ellipsis?: number | string;
  clamp?: number;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "h7"
    | "xxl"
    | "xl"
    | "lg"
    | "md"
    | "sm"
    | "xs"
    | "xxs"
    | "Large"
    | "Default"
    | "Small";

  light?: boolean;
  medium?: boolean;
  align?: "start" | "end" | "center" | "normal";
  spread?: boolean;
  color?: string;
  weight?: "normal" | "bold" | "medium";

  css?: CSS;
};

const Typography = ({
  ellipsis,
  clamp,
  variant,
  color,
  weight,
  ...props
}: PropsWithChildren<Props>) => {
  const css: CSS = {};
  if (ellipsis) {
    css.width = ellipsis;
  }
  if (clamp) {
    css.WebkitLineClamp = clamp;
  }

  return (
    <StyledText
      {...props}
      variant={variant}
      showEllipsis={ellipsis !== undefined || clamp !== undefined}
      lineClamp={clamp !== undefined}
      css={{
        ...css,
        color: color ? `${color} !important` : undefined,
        fontWeight: weight ? `$${weight} !important` : undefined,
        textAlign: props.align ? props.align : "normal",
        ...props.css,
      }}
    />
  );
};

const SectionTitle = (props: PropsWithChildren<Props>) => {
  return (
    <Typography
      {...props}
      color="$primary"
      variant="xs"
      css={{ paddingBottom: "$12", fontWeight: "$medium" }}
    />
  );
};

const ItemTitle = (props: PropsWithChildren<Props>) => {
  return <Typography variant="xs" {...props} css={{ fontWeight: "$bold" }} />;
};

const ItemSubTitle = (props: PropsWithChildren<Props>) => {
  return (
    <Typography
      {...props}
      color="$gray700"
      variant="xxs"
      css={{ paddingY: "$4" }}
    />
  );
};

const ItemDescription = (props: PropsWithChildren<Props>) => {
  return <Typography {...props} variant="xxs" color="$gray800" />;
};

const MDXText = (props: PropsWithChildren<Props>) => {
  return (
    <Typography
      variant="md"
      color="$gray800"
      css={{ lineHeight: "$space$30", textAlign: "justify" }}
      {...props}
    />
  );
};

const MDXh1 = (props: PropsWithChildren<Props>) => {
  return (
    <Typography
      variant="lg"
      color="$gray800"
      css={{
        fontWeight: "bold",
        paddingTop: "$space$24",
        paddingBottom: "$space$8",
      }}
      {...props}
    />
  );
};

export {
  Typography,
  SectionTitle,
  ItemTitle,
  ItemSubTitle,
  ItemDescription,
  MDXText,
  MDXh1,
};
