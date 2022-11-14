import { getSectionAtom } from "@src/atoms/resume";
import { Icon } from "@src/components/icon";
import { XStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import { SectionTypes } from "@src/types";
import { useSetAtom } from "jotai";
import { useCallback } from "react";

type ItemTitlePropType = {
  title: string;
  expandable?: boolean;
  level: number;
  onClickHandler?: () => void;
  hideAddButton?: boolean;
  hideUpButton?: boolean;
  hideDownButton?: boolean;
  hideRemoveButton?: boolean;
  section?: SectionTypes;
  subsection?: SectionTypes;
  index?: number[];
};

export const ItemTitle = ({
  title,
  expandable,
  onClickHandler,
  level,
  hideAddButton,
  hideUpButton,
  hideDownButton,
  hideRemoveButton,
  section,
  subsection,
  index,
}: ItemTitlePropType) => {
  const sectionAtom = getSectionAtom(section || "none");
  const dispatcher = useSetAtom(sectionAtom);

  const onAdd = useCallback(() => {
    dispatcher?.({
      type: "add",
      subsection,
      payload: { index },
    });
  }, [dispatcher, index, subsection]);

  const onUp = useCallback(() => {
    dispatcher?.({
      type: "up",
      subsection,
      payload: { index },
    });
  }, [dispatcher, index, subsection]);

  const onDown = useCallback(() => {
    dispatcher?.({
      type: "down",
      subsection,
      payload: { index },
    });
  }, [dispatcher, index, subsection]);

  const onRemove = useCallback(() => {
    dispatcher?.({
      type: "remove",
      subsection,
      payload: { index },
    });
  }, [dispatcher, index, subsection]);

  return (
    <XStack
      css={{
        alignItems: "center",
        cursor: "pointer",
        paddingLeft: `$${level * 16 + 8}`,
        paddingRight: "$8",
        borderRadius: "$space$4",
        "&:hover": {
          boxShadow: "0 0 0 1px $colors$primary5",
          ".modifiers": {
            visibility: "visible",
          },
        },
        ".modifiers": {
          visibility: "hidden",
        },
        justifyContent: "space-between",
      }}
    >
      <XStack
        onClick={onClickHandler}
        css={{ flexGrow: 1, paddingY: "$6", alignItems: "center" }}
      >
        {expandable ? (
          <XStack css={{ paddingRight: "$4" }}>
            <Icon name="expand_black" />
          </XStack>
        ) : (
          <Typography variant="xs" color="$primary80" css={{ paddingX: "$6" }}>
            •
          </Typography>
        )}
        <Typography
          variant="xs"
          css={{ textTransform: "capitalize", fontWeight: "$medium" }}
        >
          {title}
        </Typography>
      </XStack>
      <XStack className="modifiers">
        {!hideAddButton && <Icon name="add" size="sm" onClick={onAdd} />}
        {!hideUpButton && <Icon name="up" size="sm" onClick={onUp} />}
        {!hideDownButton && <Icon name="down" size="sm" onClick={onDown} />}
        {!hideRemoveButton && (
          <Icon name="minus" size="sm" onClick={onRemove} />
        )}
      </XStack>
    </XStack>
  );
};
