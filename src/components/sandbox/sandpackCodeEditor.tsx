import { SandpackCodeEditor } from "@codesandbox/sandpack-react";
import { useSandpack } from "@codesandbox/sandpack-react";
import { ApiRoutes } from "@src/utils/routes";
import { useEffect } from "react";
export const SandpackEditor = () => {
  const { sandpack } = useSandpack();
  const { files, activeFile, setActiveFile } = sandpack;
  const code = files[activeFile].code;
  console.log(code);

  useEffect(() => {
    try {
      fetch(ApiRoutes.SaveCodeBlocks(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          codeBlocks: {
            code,
            username: "test",
          },
          username: "test",
        }),
      });
    } catch (e) {}
  }, [code]);

  return (
    <SandpackCodeEditor
      showLineNumbers={true}
      showInlineErrors={true}
      wrapContent={true}
      showTabs={true}
      closableTabs={true}
      initMode="immediate"
    />
  );
};
