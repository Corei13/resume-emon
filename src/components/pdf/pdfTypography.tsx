import { Text } from "@react-pdf/renderer";
import { PDFStyles } from "@src/pdfStyles";
import { PropsWithChildren } from "react";
import { Style } from "@react-pdf/types";

export const SectionTitle = ({
  children,
  style,
}: PropsWithChildren<{ style?: Style }>) => {
  return (
    <Text
      style={{
        ...PDFStyles.sectionTitle,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export const BioText = ({ children }: PropsWithChildren) => {
  return <Text style={PDFStyles.bioText}>{children}</Text>;
};
