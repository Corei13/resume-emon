import { Icon, IconName } from "@src/components/icon";
import { XStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";

type SectionTitlePropType = {
  title: string;
  icon: IconName;
  expanded?: boolean;
  onClickHandler: () => void;
  notExpandable?: boolean;
};

export const SectionTitle = ({
  title,
  icon,
  expanded,
  onClickHandler,
  notExpandable,
}: SectionTitlePropType) => {
  return (
    <XStack
      alignItems="center"
      css={{
        background: expanded && !notExpandable ? "$primary5" : "transparent",
        borderRadius: "$space$4",
        padding: "$4",
        cursor: "pointer",
      }}
      onClick={onClickHandler}
    >
      <Icon
        name={expanded ? "expand" : "expand_black"}
        css={{
          marginX: "$8",
          visibility: !notExpandable ? "show" : "hidden",
        }}
      />
      <Icon name={expanded ? icon : (`${icon}_black` as IconName)} />
      <Typography
        variant="xs"
        color={expanded ? "$primary" : "$gray900"}
        css={{ marginX: "$8", fontWeight: "$medium" }}
      >
        {title}
      </Typography>
    </XStack>
  );
};
