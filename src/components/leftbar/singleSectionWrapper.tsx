import { YStack } from "@src/components/stack";
import { PropsWithChildren, useReducer } from "react";
import { SectionTitle } from "@src/components/leftbar/sectionTitle";
import { IconName } from "@src/components/icon";
import {
  Education,
  Experience,
  Profile,
  Project,
  SkillSection,
} from "@src/types";

type SingleSectionWrapperPropType = {
  title: string;
  icon: IconName;
  expanded?: boolean;
  values?: Profile | Experience[] | Project[] | Education[] | SkillSection[];
  notExpandable?: boolean;
};

export const SingleSectionWrapper = ({
  title,
  icon,
  children,
  notExpandable,
}: PropsWithChildren<SingleSectionWrapperPropType>) => {
  const [expanded, toggleExpanded] = useReducer((expanded) => !expanded, false);

  return (
    <YStack css={{ marginBottom: "$4" }}>
      <SectionTitle
        title={title}
        icon={icon}
        expanded={expanded}
        onClickHandler={toggleExpanded}
        notExpandable={notExpandable}
      />
      {!notExpandable && expanded && (
        <YStack
          css={{
            marginLeft: "$46",
            borderLeft: "$space$2 solid $gray200",
            paddingLeft: "$12",
            marginY: "$8",
          }}
        >
          {children}
        </YStack>
      )}
    </YStack>
  );
};
