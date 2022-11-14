import { selectedViewAtom } from "@src/atoms/selectedView";
import { ResumeCanvas } from "@src/components/canvas/canvas";
import { PDFRenderer } from "@src/components/pdf/pdfRenderer";
import { YStack } from "@src/components/stack";
import { useAtomValue } from "jotai";

export const MainView = () => {
  const selectedView = useAtomValue(selectedViewAtom);

  return (
    <YStack
      css={{
        background: "$gray200",
        flexGrow: 1,
        overflowY: "auto",
        height: "100%",
      }}
    >
      {selectedView === "canvas" ? <ResumeCanvas /> : <PDFRenderer />}
    </YStack>
  );
};
