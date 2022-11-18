import { XStack, YStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import { styled } from "@src/stitches.config";
import { ComponentProps } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import {
  selectedItemAtom,
  selectedItemNameAtom,
} from "@src/atoms/selectedItem";
import { SectionTypes } from "@src/types";
import { getSectionAtom } from "@src/atoms/resume";
import { MonthShortNames, ValidYears } from "@src/utils/constants";

const StyledInput = styled("input", {
  border: "none",
  fontSize: "$xs",
  outline: "none",
  fontWeight: "$medium",
});

const StyledTextarea = styled("textarea", {
  border: "none",
  fontSize: "$xs",
  outline: "none",
  fontWeight: "$medium",
  width: "100%",
  boxShadow: "0 0 0 $space$1 $colors$gray300",
  padding: "$6",
  borderRadius: "$space$2",
  fontFamily: "inherit",
});

const StyledSelectInput = styled("select", {
  appearance: "none",
  border: "none",
  fontSize: "$xs",
  outline: "none",
  fontWeight: "$medium",
  position: "relative",
  backgroundImage: `url("/assets/icons/expand_black.svg")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right center",
  backgroundSize: "16px 16px",
  paddingRight: "$20",
});

const StyledOption = styled("option", {
  fontSize: "$xs",
  fontWeight: "$medium",
  textTransform: "capitalize",
});

type InputProps = {
  name: string;
  title?: string;
  options?: { name: string; value: string | number }[];
  hideMonth?: boolean;
  subsection?: SectionTypes;
  section?: SectionTypes;
};

export const TextInput = ({
  name,
  title,
  subsection,
  section,
  ...props
}: InputProps & Partial<ComponentProps<typeof StyledInput>>) => {
  const selectedItem = useAtomValue(selectedItemAtom);
  const selectedItemName = useAtomValue(selectedItemNameAtom);
  const sectionAtom = getSectionAtom(section || "none");
  const dispatcher = useSetAtom(sectionAtom);

  return (
    <XStack
      css={{
        paddingX: "$8",
        paddingY: "$6",
        borderRadius: "$space$2",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "$16",
        "&:hover, &:focus-within": {
          boxShadow: "0 0 0 $space$1 $colors$gray300",
        },
      }}
    >
      <label htmlFor={name.replace(" ", "-") + "-input"}>
        <Typography
          variant="xs"
          css={{
            fontWeight: "$medium",
            textTransform: "capitalize",
            wordBreak: "normal",
          }}
        >
          {title || name}
        </Typography>
      </label>
      <StyledInput
        {...props}
        id={name.replace(" ", "-") + "-input"}
        css={{ textAlign: "right", flexGrow: 1 }}
        value={(selectedItem as any)[name]}
        onChange={(e) =>
          dispatcher?.({
            type: "update",
            subsection,
            payload: {
              field: name,
              index: selectedItemName?.index,
              value: e.target.value,
            },
          })
        }
      />
    </XStack>
  );
};

export const ParagraphInput = ({
  name,
  title,
  subsection,
  section,
  ...props
}: InputProps & Partial<ComponentProps<typeof StyledTextarea>>) => {
  const selectedItem = useAtomValue(selectedItemAtom);
  const selectedItemName = useAtomValue(selectedItemNameAtom);
  const sectionAtom = getSectionAtom(section || "none");
  const dispatcher = useSetAtom(sectionAtom);

  return (
    <YStack
      css={{
        paddingX: "$8",
        paddingY: "$6",
        borderRadius: "$space$2",
        alignItems: "start",
        gap: "$12",
      }}
    >
      <label htmlFor={name.replace(" ", "-") + "-input"}>
        <Typography
          variant="xs"
          css={{
            fontWeight: "$medium",
            textTransform: "capitalize",
            wordBreak: "normal",
          }}
        >
          {title || name}
        </Typography>
      </label>
      <StyledTextarea
        {...props}
        id={name.replace(" ", "-") + "-input"}
        css={{ flexGrow: 1 }}
        rows={4}
        value={(selectedItem as any)[name]}
        onChange={(e) =>
          dispatcher?.({
            type: "update",
            subsection,
            payload: {
              field: name,
              index: selectedItemName?.index,
              value: e.target.value,
            },
          })
        }
      />
    </YStack>
  );
};

const SelectInput = ({
  name,
  options,
  ...props
}: InputProps & Partial<ComponentProps<typeof StyledSelectInput>>) => {
  return (
    <StyledSelectInput
      {...props}
      id={name.replace(" ", "-") + "-input"}
      css={{ textAlign: "right", flexGrow: 1 }}
    >
      {options?.map((option) => (
        <StyledOption key={option.value} value={option.value}>
          {option.name}
        </StyledOption>
      ))}
    </StyledSelectInput>
  );
};

export const SelectMonthYearInput = ({
  name,
  hideMonth,
  title,
  subsection,
  section,
  ...props
}: InputProps & Partial<ComponentProps<typeof StyledSelectInput>>) => {
  const selectedItem = useAtomValue(selectedItemAtom);
  const selectedItemName = useAtomValue(selectedItemNameAtom);
  const sectionAtom = getSectionAtom(section || "none");
  const dispatcher = useSetAtom(sectionAtom);

  return (
    <XStack
      css={{
        paddingX: "$8",
        paddingY: "$6",
        borderRadius: "$space$2",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "$16",
      }}
    >
      <label htmlFor={name.replace(" ", "-") + "-input"}>
        <Typography
          variant="xs"
          css={{
            fontWeight: "$medium",
            textTransform: "capitalize",
            wordBreak: "normal",
          }}
        >
          {title || name}
        </Typography>
      </label>
      <XStack css={{ gap: "$16" }}>
        {!hideMonth && (
          <SelectInput
            {...props}
            name={`${name.replace(" ", "-")}-Month`}
            options={MonthShortNames.map((name, index) => ({
              name,
              value: index + 1,
            }))}
            value={(selectedItem as any)[name]?.month}
            onChange={(e) =>
              dispatcher?.({
                type: "update",
                subsection,
                payload: {
                  field: name,
                  index: selectedItemName?.index,
                  value: {
                    ...(selectedItem as any)[name],
                    month: e.target.value,
                  },
                },
              })
            }
          />
        )}
        <SelectInput
          {...props}
          name={`${name.replace(" ", "-")}-Years`}
          options={ValidYears.map((year) => ({ name: `${year}`, value: year }))}
          value={(selectedItem as any)[name]?.year}
          onChange={(e) =>
            dispatcher?.({
              type: "update",
              subsection,
              payload: {
                field: name,
                index: selectedItemName?.index,
                value: {
                  ...(selectedItem as any)[name],
                  year: e.target.value,
                },
              },
            })
          }
        />
      </XStack>
    </XStack>
  );
};
