import { Button } from "@src/components/button";
import { ChallengesNav } from "@src/components/challenges/nav";
import { Search } from "@src/components/icons/search";
import { ResumeCard } from "@src/components/myResumes/resumeCard";
import { XStack, YStack } from "@src/components/stack";
import { styled } from "@src/stitches.config";

export const ResumeBody = () => {
  const createResumeButton = (
    <Button
      type={"white"}
      css={{
        width: "$space$160",
        border: "1px solid $deepBlue",
        color: "$deepBlue",
      }}
    >
      Create a Resume
    </Button>
  );

  const StyledInput = styled("input", {
    border: "none",
    fontSize: "$sm",
    outline: "none",
    width: "100%",
    fontWeight: "$medium",
  });

  const searchInput = (
    <XStack
      alignItems="center"
      space={"$10"}
      css={{
        border: "1px solid $deepBlue",
        height: "$space$40",
        width: "$space$284",
        paddingX: "$20",
        borderRadius: "$space$6",
      }}
    >
      <Search />
      <StyledInput placeholder="Search for resume, keywords" />
    </XStack>
  );

  return (
    <YStack css={{ width: "100%" }}>
      <ChallengesNav
        navTitle="My Resumes"
        actionButton={createResumeButton}
        searchInput={searchInput}
        noBorder={true}
      />
      <ResumeCard resumeTitle="Product Design" date="20 Nov, 2022" />
      <ResumeCard resumeTitle="Re:criut" date="20 Nov, 2022" />
      <ResumeCard resumeTitle="Affine" date="20 Nov, 2022" />
    </YStack>
  );
};
