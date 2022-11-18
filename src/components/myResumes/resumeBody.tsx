import { Button } from "@src/components/button";
import { ChallengesNav } from "@src/components/challenges/nav";
import { SearchIcon } from "@src/components/icons/search";
import { ResumeCard } from "@src/components/myResumes/resumeCard";
import { XStack, YStack } from "@src/components/stack";
import { styled } from "@src/stitches.config";

const createResumeButton = (
  <Button
    type={"white"}
    css={{
      width: "$space$160",
      border: "$space$1 solid $blue900",
      color: "$blue900",
    }}
  >
    Create a Resume
  </Button>
);

export const BorderLessInput = styled("input", {
  border: "none",
  fontSize: "$sm",
  outline: "none",
  width: "100%",
  fontWeight: "$medium",
});

const SearchInput = (
  <XStack
    alignItems="center"
    space={"$10"}
    css={{
      border: "$space$1 solid $blue900",
      height: "$space$40",
      width: "$space$284",
      paddingX: "$20",
      borderRadius: "$space$6",
    }}
  >
    <SearchIcon />
    <BorderLessInput placeholder="Search for resume, keywords" />
  </XStack>
);

export const ResumeBody = () => {
  return (
    <YStack css={{ width: "100%" }}>
      <ChallengesNav
        navTitle="My Resumes"
        actionButton={createResumeButton}
        searchInput={SearchInput}
        noBorder={true}
      />
      <ResumeCard resumeTitle="Product Design" date="20 Nov, 2022" />
      <ResumeCard resumeTitle="Re:criut" date="20 Nov, 2022" />
      <ResumeCard resumeTitle="Affine" date="20 Nov, 2022" />
    </YStack>
  );
};
