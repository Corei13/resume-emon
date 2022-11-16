import { Button } from "@src/components/button";
import { ChallengesNav } from "@src/components/challenges/nav";
import { ModalBody } from "@src/components/modal/modalBody";
import { TaskModalContent } from "@src/components/modal/taskModalContent";
import { XStack, YStack } from "@src/components/stack";
import { MDXh1, MDXText, Typography } from "@src/components/typography";
import React, { useEffect, useState } from "react";
import CodeCube from "@src/mdx/codeCube.mdx";

export const ChallengeBody = () => {
  const components = {
    p: MDXText,
    h1: MDXh1,
  };

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });

    return () => {
      window.removeEventListener("scroll", () => setScroll(false));
    };
  }, []);

  return (
    <YStack css={{ width: "100%", paddingBottom: "$60" }}>
      <XStack
        css={{
          width: "100%",
          height: "$space$96",
          alignItems: "center",
          backgroundColor: "$white",
          boxShadow: `${scroll ? "29px 16px 29px 0px #00000014" : ""}`,
        }}
        sticky={true}
      >
        <ChallengesNav />
      </XStack>
      <YStack css={{ paddingX: "$40", paddingTop: "$40" }}>
        <CodeCube components={components} />
        <XStack css={{ paddingTop: "$52" }}>
          <Typography
            variant="lg"
            color="$violet"
            css={{ fontWeight: "bold", margin: "auto" }}
          >
            Ready to make it happen ?
          </Typography>
        </XStack>
        <XStack css={{ width: "100%", paddingTop: "$16" }}>
          <ModalBody body={<TaskModalContent />}>
            <Button
              type={"white"}
              css={{
                width: "100%",
                border: "1px solid $violet",
                color: "$violet",
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
