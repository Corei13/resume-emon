import { SecondaryButton } from "@src/components/button";
import { ChallengesNav } from "@src/components/challenges/nav";
import { ModalBody } from "@src/components/modal/modalBody";
import { TaskModalContent } from "@src/components/modal/taskModalContent";
import { XStack, YStack } from "@src/components/stack";
import { MDXh1, MDXText, Typography } from "@src/components/typography";
import React from "react";
import CodeCube from "./../../mdx/codeCube.mdx";

export const ChallengeBody = () => {
  const components = {
    p: MDXText,
    h1: MDXh1,
  };

  return (
    <YStack css={{ marginX: "$40", width: "100%", marginBottom: "$60" }}>
      <ChallengesNav />
      <CodeCube components={components} />
      <XStack css={{ marginTop: "$52" }}>
        <Typography
          variant="lg"
          color="$violet"
          css={{ fontWeight: "bold", margin: "auto" }}
        >
          Ready to make it happen ?
        </Typography>
      </XStack>
      <XStack css={{ width: "100%", marginTop: "$16" }}>
        <ModalBody body={<TaskModalContent />}>
          <SecondaryButton
            css={{
              width: "100%",
              border: "1px solid $violet",
              color: "$violet",
            }}
          >
            Start Test
          </SecondaryButton>
        </ModalBody>
      </XStack>
    </YStack>
  );
};
