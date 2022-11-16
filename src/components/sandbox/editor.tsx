import { XStack } from "@src/components/stack";
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";
import { useEffect, useState } from "react";
import { Preview } from "@src/components/sandbox/preview";

export const Editor = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);

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
        template="react-ts"
        theme={nightOwl}
        style={{ width: "100%", backgroundColor: "$white" }}
        options={{
          autorun: true,
          recompileMode: "immediate",
          initMode: "immediate",
        }}
      >
        <XStack css={{ width: "100%", backgroundColor: "$white" }}>
          <XStack
            css={{
              flex: 1,
              flexShrink: 1,
              height: `${height}px`,
              backgroundColor: "$white",
            }}
          >
            <SandpackCodeEditor
              showLineNumbers={true}
              showInlineErrors={true}
              wrapContent={true}
              showTabs={true}
              closableTabs={true}
              initMode="immediate"
            />
          </XStack>
          <Preview windowHeight={height}>
            <SandpackPreview
              style={{ height: `${height - 46}px`, backgroundColor: "$white" }}
            />
          </Preview>
        </XStack>
      </SandpackProvider>
    </XStack>
  );
};
