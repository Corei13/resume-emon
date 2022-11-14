import { Text, View } from "@react-pdf/renderer";
import { PDFIcon } from "@src/components/pdf/pdfIcon";
import { PDFStyles } from "@src/pdfStyles";
import { PropsWithChildren } from "react";
import { Style } from "@react-pdf/types";

export const TextWithIcon = ({
  children,
  icon,
  style,
}: PropsWithChildren<{
  icon: string;
  style?: Style;
}>) => {
  return (
    <View
      style={{
        ...PDFStyles.textWithIcon,
        ...style,
      }}
    >
      <PDFIcon name={icon} />
      <Text>{children}</Text>
    </View>
  );
};
