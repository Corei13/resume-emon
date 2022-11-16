import { MiniButton } from "@src/components/button";
import { XStack, YStack } from "@src/components/stack";
import React, { useState } from "react";
import { MDXh1, MDXText } from "@src/components/typography";
import CodeCube from "@src/mdx/codeCube.mdx";

type TAB = "browser" | "challenge";

const components = {
  p: MDXText,
  h1: MDXh1,
};

const PreviewNav = ({
  tab,
  setTab,
}: {
  tab: TAB;
  setTab: (tab: TAB) => void;
}) => {
  return (
    <XStack
      alignItems="center"
      css={{
        width: "100%",
        height: "$space$46",
        backgroundColor: "$gray150",
        color: "$gray900",
        paddingLeft: "$22",
      }}
    >
      <MiniButton active={tab === "browser"} onClick={() => setTab("browser")}>
        Browser
      </MiniButton>
      <MiniButton
        active={tab === "challenge"}
        onClick={() => setTab("challenge")}
      >
        Challenge
      </MiniButton>
    </XStack>
  );
};

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
          <YStack
            css={{
              padding: "$32",
            }}
          >
            <YStack>
              <CodeCube components={components} />
            </YStack>
          </YStack>
        </XStack>
      )}
    </YStack>
  );
};
