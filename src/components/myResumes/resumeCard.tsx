import { CrossIcon } from "@src/components/icons/cross";
import { EditIcon } from "@src/components/icons/edit";
import { LinkIcon } from "@src/components/icons/link";
import { XStack, YStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import { styled } from "@src/stitches.config";

const TargetXStack = styled(XStack, {
  height: "$space$28",
  width: "$space$70",
  backgroundColor: "$colors$gray100",
  borderRadius: "$space$72",
});

export const ResumeCard = ({
  resumeTitle,
  date,
  onEditClick,
  onLinkClick,
  onDelete,
}: {
  resumeTitle: string;
  date: string;
  onEditClick?: (resumeId: string) => void;
  onLinkClick?: (resumeId: string) => void;
  onDelete?: (resumeId: string) => void;
}) => {
  return (
    <XStack
      css={{
        height: "$space$72",
        marginX: "$space$40",
        marginY: "$space$12",
        border: "$space$1 solid $colors$gray300",
        borderRadius: "$space$6",
        alignItems: "center",
        paddingX: "$space$20",
        "&:hover": {
          border: "$space$1 solid $colors$blue900",
          boxShadow: "0 $space$16 $space$28 $colors$gray200",
          [`& ${TargetXStack}`]: {
            color: "$blue900",
            backgroundColor: "$lavender",
          },
        },
      }}
    >
      <YStack css={{ marginRight: "auto" }}>
        <Typography variant="md" css={{ fontWeight: "bold" }}>
          {resumeTitle}
        </Typography>
        <Typography variant="xs" color="$colors$gray500">
          {date}
        </Typography>
      </YStack>
      <XStack alignItems="center" space={"$16"}>
        <TargetXStack justifyContent="center" alignItems="center">
          PDF ↓
        </TargetXStack>
        <EditIcon />
        <LinkIcon />
        <CrossIcon />
      </XStack>
    </XStack>
  );
};
