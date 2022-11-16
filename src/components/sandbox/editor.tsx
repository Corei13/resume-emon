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
        style={{ width: "100%" }}
        options={{
          autorun: true,
          recompileMode: "immediate",
          initMode: "immediate",
        }}
      >
        <XStack css={{ width: "100%" }}>
          <XStack
            css={{
              flex: 1,
              flexShrink: 1,
              height: `${height - 96}px`,
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
          <Preview windowHeight={height - 96}>
            <SandpackPreview style={{ height: `${height - 142}px` }} />
          </Preview>
        </XStack>
      </SandpackProvider>
    </XStack>
  );
};
