import { ChallengesNav } from "@src/components/challenges/nav";
import { YStack } from "@src/components/stack";
import { MDXh1, MDXText } from "@src/components/typography";
import React from "react";
import CodeCube from "./../../mdx/codeCube.mdx";

export const ChallengeBody = () => {
  const components = {
    p: MDXText,
    h1: MDXh1,
  };

  return (
    <YStack css={{ marginX: "$40", width: "100%" }}>
      <ChallengesNav />
      <CodeCube components={components} />
    </YStack>
  );
};
