import { Typography } from "@src/components/typography";
import { PropsWithChildren } from "react";

const MDXText = (props: PropsWithChildren) => {
  return (
    <Typography
      variant="md"
      color="$gray800"
      css={{ lineHeight: "$space$30", textAlign: "justify" }}
      {...props}
    />
  );
};

const MDXh1 = (props: PropsWithChildren) => {
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

export { MDXText, MDXh1 };
