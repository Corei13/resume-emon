import { XStack } from "@src/components/stack";

import {
  SandpackProvider,
  SandpackPreview,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";
import { useEffect, useState } from "react";
import { Preview } from "@src/components/sandbox/preview";
import { SandpackEditor } from "@src/components/sandbox/sandpackCodeEditor";
import { CodeBlocks } from "@src/types";

export const Editor = ({ codeBlocks }: { codeBlocks?: CodeBlocks }) => {
  const [height, setHeight] = useState(0);
  console.log(codeBlocks);

  const initialFile = `export default function App() {
    return <h1>Hello Re:cruit!</h1>;
  }
  `;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.innerHeight);
    }

    return () => {
      setHeight(0);
    };
  }, []);

  return (
    <XStack
      css={{
        width: "100%",
      }}
    >
      <SandpackProvider
        template="react"
        theme={nightOwl}
        style={{ width: "100%" }}
        files={{
          "/App.js": `${codeBlocks?.code ? codeBlocks.code : initialFile}`,
        }}
      >
        <XStack css={{ width: "100%" }}>
          hellos
          <XStack
            css={{
              flex: 1,
              flexShrink: 1,
              height: `${height - 96}px`,
            }}
          >
            <XStack css={{ width: "$64" }}>
              <SandpackFileExplorer />
            </XStack>
            <SandpackEditor />
          </XStack>
          <Preview windowHeight={height - 96}>
            <SandpackPreview style={{ height: `${height - 142}px` }} />
          </Preview>
        </XStack>
      </SandpackProvider>
    </XStack>
  );
};

export default Editor;
