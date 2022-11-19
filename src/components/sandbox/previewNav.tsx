import { Button } from "@src/components/button";
import { TAB } from "@src/components/sandbox/preview";
import { XStack } from "@src/components/stack";

export const PreviewNav = ({
  tab,
  setTab,
}: {
  tab: TAB;
  setTab: (tab: TAB) => void;
}) => {
  return (
    <XStack
      alignItems="center"
      padding={"0 0 0 $space$22"}
      css={{
        width: "100%",
        height: "$space$46",
        backgroundColor: "$gray150",
        color: "$gray900",
      }}
    >
      <Button
        type={`${tab === "browser" ? "miniActive" : "miniDeactive"}`}
        onClick={() => setTab("browser")}
      >
        Browser
      </Button>
      <Button
        type={`${tab === "challenge" ? "miniActive" : "miniDeactive"}`}
        onClick={() => setTab("challenge")}
      >
        Challenge
      </Button>
    </XStack>
  );
};
