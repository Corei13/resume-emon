import dynamic from "next/dynamic";
import { YStack, XStack } from "@src/components/stack";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDF = dynamic(() => import("@src/components/pdf/pdf"), {
  ssr: false,
});

export const PDFRenderer = () => {
  const [numPages, setNumPages] = useState(0);
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <YStack css={{ margin: "auto", paddingY: "$60" }}>
      <PDF
        callbackFn={(args) => (
          <Document
            loading={<LoadingComponent />}
            noData={<LoadingComponent />}
            error={<LoadingComponent />}
            file={args.blob}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from({ length: numPages }, (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderAnnotationLayer={false}
              />
            ))}
          </Document>
        )}
      />
    </YStack>
  );
};

const LoadingComponent = () => {
  return <XStack css={{ margin: "auto" }}>Updating PDF...</XStack>;
};
