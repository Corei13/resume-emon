import { XStack, YStack } from "@src/components/stack";
import React, { useState } from "react";
import CodeCube from "@src/mdx/codeCube.mdx";
import { components } from "@src/components/challenges/challengeBody";
import { PreviewNav } from "@src/components/sandbox/previewNav";

export type TAB = "browser" | "challenge";

export const Preview = ({
  children,
  windowHeight,
}: {
  children: React.ReactNode;
  windowHeight: number;
}) => {
  const [tab, setTab] = useState<TAB>("browser");

  return (
    <YStack css={{ flex: 1, flexShrink: 1 }}>
      <PreviewNav setTab={setTab} tab={tab} />
      {tab === "browser" ? (
        <XStack>{children}</XStack>
      ) : (
        <XStack
          css={{
            width: "100%",
            height: `${windowHeight - 46}px`,
            overflowY: "scroll",
          }}
        >
          <YStack padding={"$space$32"}>
            <YStack>
              <CodeCube components={components} />
            </YStack>
          </YStack>
        </XStack>
      )}
    </YStack>
  );
};
