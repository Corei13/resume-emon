/* eslint-disable jsx-a11y/alt-text */
import { Image } from "@react-pdf/renderer";
import { PDFStyles } from "@src/pdfStyles";

export const PDFIcon = ({ name }: { name: string }) => {
  return <Image src={`/assets/icons/${name}.png`} style={PDFStyles.pdfIcon} />;
};
