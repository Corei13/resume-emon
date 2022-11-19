import { selectedViewAtom } from "@src/atoms/selectedView";
import { Icon, IconName } from "@src/components/icon";
import { XStack } from "@src/components/stack";
import { useAtom } from "jotai";

export const CanvasNav = () => {
  const [selectedView, setSelectedView] = useAtom(selectedViewAtom);

  return (
    <XStack justifyContent="center">
      <XStack space={"$8"}>
        <CanvasNavIcon
          selected={selectedView === "canvas"}
          icon={"monitor"}
          onClickHandler={() => setSelectedView("canvas")}
        />
        <CanvasNavIcon
          selected={selectedView === "pdf"}
          icon={"pdf"}
          onClickHandler={() => setSelectedView("pdf")}
        />
      </XStack>
    </XStack>
  );
};

const CanvasNavIcon = ({
  selected,
  icon,
  onClickHandler,
}: {
  selected: boolean;
  icon: IconName;
  onClickHandler: () => void;
}) => {
  return (
    <Icon
      name={selected ? icon : ((icon + "_black") as IconName)}
      css={{
        paddingTop: "$8",
        paddingBottom: "$12",
        paddingX: "$2",
        borderBottom: selected ? "1px solid $primary50" : "",
        cursor: "pointer",
      }}
      onClick={onClickHandler}
    />
  );
};
