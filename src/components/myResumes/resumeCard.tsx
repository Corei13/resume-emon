import { Cross } from "@src/components/icons/cross";
import { DownloadPDFIcon } from "@src/components/icons/downloadPDFIcon";
import { Edit } from "@src/components/icons/edit";
import { LinkIcon } from "@src/components/icons/linkIcon";
import { XStack, YStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";

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
        border: "1px solid $colors$gray300",
        borderRadius: "$space$6",
        alignItems: "center",
        paddingX: "$space$20",
        "&:hover": {
          border: "1px solid $colors$violet",
          boxShadow: "0 $space$16 29px $colors$gray300",
          ".child": {
            color: "$violet",
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
      <XStack css={{ gap: "$space$16" }}>
        <XStack
          className="child"
          css={{
            height: "$space$28",
            width: "$space$70",
            backgroundColor: "$gray100",
            borderRadius: "$space$72",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "$space$12",
            gap: "$space$4",
          }}
        >
          PDF <DownloadPDFIcon />
        </XStack>
        <Edit />
        <LinkIcon />
        <Cross />
      </XStack>
    </XStack>
  );
};
