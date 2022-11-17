import { XStack } from "@src/components/stack";

export const ResumeCard = ({
  resumeTitle,
  date,
  isDownloaded,
  onEditClick,
  onLinkClick,
  onDelete,
}: {
  resumeTitle: string;
  date: string;
  isDownloaded: boolean;
  onEditClick?: (resumeId: string) => void;
  onLinkClick?: (resumeId: string) => void;
  onDelete?: (resumeId: string)
}) => {
  return (
    <XStack>
      
    </XStack>
  )
};
