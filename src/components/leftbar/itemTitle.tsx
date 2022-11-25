import { getSectionAtom } from "@src/atoms/resume";
import { usernameAtom } from "@src/atoms/username";
import { Icon } from "@src/components/icon";
import { XStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import { SectionTypes } from "@src/types";
import { useAtomValue, useSetAtom } from "jotai";
import { useRouter } from "next/router";
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
  const username = useAtomValue(usernameAtom);
  const dispatcher = useSetAtom(sectionAtom);
  const router = useRouter();
  const { id } = router.query;

  const onAdd = useCallback(() => {
    dispatcher?.({
      type: "add",
      subsection,
      payload: { index, username, resumeId: Number(id) },
    });
  }, [id, dispatcher, index, subsection, username]);

  const onUp = useCallback(() => {
    dispatcher?.({
      type: "up",
      subsection,
      payload: { index, username, resumeId: Number(id) },
    });
  }, [id, dispatcher, index, subsection, username]);

  const onDown = useCallback(() => {
    dispatcher?.({
      type: "down",
      subsection,
      payload: { index, username, resumeId: Number(id) },
    });
  }, [id, dispatcher, index, subsection, username]);

  const onRemove = useCallback(() => {
    dispatcher?.({
      type: "remove",
      subsection,
      payload: { index, username, resumeId: Number(id) },
    });
  }, [id, dispatcher, index, subsection, username]);

  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      css={{
        cursor: "pointer",
        paddingLeft: `$${level * 16 + 8}`,
        paddingRight: "$8",
        borderRadius: "$space$4",
        "&:hover": {
          boxShadow: "0 0 0 $space$1 $colors$primary5",
          ".modifiers": {
            visibility: "visible",
          },
        },
        ".modifiers": {
          visibility: "hidden",
        },
      }}
    >
      <XStack
        alignItems="center"
        onClick={onClickHandler}
        css={{ flexGrow: 1, paddingY: "$6" }}
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
