import { Button } from "@src/components/button";
import { ChallengesNav } from "@src/components/challenges/nav";
import { SearchIcon } from "@src/components/icons/search";
import { ModalBody } from "@src/components/modal/modalBody";
import { SetResumeTitle } from "@src/components/modal/setResumeTitle";
import { ResumeCard } from "@src/components/myResumes/resumeCard";
import { XStack, YStack } from "@src/components/stack";
import { styled } from "@src/stitches.config";
import { TAllResumes } from "@src/types";
import { ApiRoutes } from "@src/utils/routes";
import { useEffect, useState } from "react";

const createResumeButton = (
  <ModalBody body={<SetResumeTitle />}>
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
  </ModalBody>
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
    padding={"0 $space$20"}
    css={{
      border: "$space$1 solid $blue900",
      height: "$space$40",
      width: "$space$284",
      borderRadius: "$space$6",
    }}
  >
    <SearchIcon />
    <BorderLessInput placeholder="Search for resume, keywords" />
  </XStack>
);

export const ResumeBody = () => {
  const [resumes, setResumes] = useState<TAllResumes[]>();
  useEffect(() => {
    const controller = new AbortController();

    const fetchAllResumes = async () => {
      await fetch(ApiRoutes.getAllResumes(localStorage.getItem("userName")!), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const resumes = data.resumes.map((resume: TAllResumes) => {
            return {
              id: resume.id,
              title: resume.title,
              createdAt: resume.createdAt,
            };
          });
          setResumes(resumes);
        });
    };
    fetchAllResumes();

    return () => controller.abort();
  }, []);

  return (
    <YStack css={{ width: "100%" }}>
      <ChallengesNav
        navTitle="My Resumes"
        actionButton={createResumeButton}
        searchInput={SearchInput}
        noBorder={true}
      />
      {resumes?.map((resume) => (
        <ResumeCard
          key={resume.id}
          id={resume.id}
          resumeTitle={resume.title}
          date={resume.createdAt}
        />
      ))}
    </YStack>
  );
};
