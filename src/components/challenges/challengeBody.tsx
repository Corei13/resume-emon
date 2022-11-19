import { Button } from "@src/components/button";
import { ChallengesNav } from "@src/components/challenges/nav";
import { ModalBody } from "@src/components/modal/modalBody";
import { TaskModalContent } from "@src/components/modal/taskModalContent";
import { XStack, YStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import React, { useEffect, useState } from "react";
import CodeCube from "@src/mdx/codeCube.mdx";
import { MDXh1, MDXText } from "@src/components/mdxElements";
import { useRouter } from "next/router";

export const components = {
  p: MDXText,
  h1: MDXh1,
};

export const ChallengeBody = () => {
  const [scroll, setScroll] = useState(false);
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });

    return () => {
      window.removeEventListener("scroll", () => setScroll(false));
    };
  }, []);

  const startTestButton = (
    <ModalBody body={<TaskModalContent />}>
      <Button type={"blue900"} css={{ width: "$space$128" }}>
        Start Test
      </Button>
    </ModalBody>
  );

  return (
    <YStack padding={"0 0 $space$60 0"} css={{ width: "100%" }}>
      <XStack
        alignItems="center"
        css={{
          width: "100%",
          height: "$space$96",
          backgroundColor: "$white",
          boxShadow: `${
            scroll ? "$space$28 $space$16 $space$28 0 $colors$gray200" : ""
          }`,
        }}
        sticky={true}
      >
        <ChallengesNav navTitle="Code Cube" actionButton={startTestButton} />
      </XStack>
      <YStack padding={"$space$40 $space$40 0"}>
        <CodeCube components={components} />
        <XStack padding={"$space$52 0 0 0"}>
          <Typography
            variant="lg"
            color="$blue900"
            css={{ fontWeight: "bold", margin: "auto" }}
          >
            Ready to make it happen ?
          </Typography>
        </XStack>
        <XStack padding={"$space$16 0 0 0"} css={{ width: "100%" }}>
          <ModalBody body={<TaskModalContent />}>
            <Button
              type={"white"}
              css={{
                width: "100%",
                border: "1px solid $blue900",
                color: "$blue900",
              }}
            >
              Start Test
            </Button>
          </ModalBody>
        </XStack>
      </YStack>
    </YStack>
  );
};
