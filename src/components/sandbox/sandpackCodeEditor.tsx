import { SandpackCodeEditor } from "@codesandbox/sandpack-react";
import { useSandpack } from "@codesandbox/sandpack-react";
import { ApiRoutes } from "@src/utils/routes";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef } from "react";

export const SandpackEditor = () => {
  const { sandpack } = useSandpack();
  const router = useRouter();
  const { sandbox } = router.query;
  const { files, activeFile } = sandpack;
  const code = files[activeFile].code;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  let username = "";

  if (typeof window !== "undefined") {
    username = localStorage.getItem("userName") || "";
  }

  const saveCode = useCallback(() => {
    if (username) {
      try {
        fetch(ApiRoutes.saveCodeBlocks(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            codeBlocks: {
              code,
              username,
              challengeId: sandbox,
            },
          }),
        });
      } catch (e) {}
    }
  }, [code, sandbox, username]);

  useEffect(() => {
    const controller = new AbortController();

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(saveCode, 500);

    return () => {
      controller.abort();
    };
  }, [code, saveCode]);

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
