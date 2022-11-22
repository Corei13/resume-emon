import { CodeBlocks } from "@prisma/client";
import { Button } from "@src/components/button";
import { ChallengesNav } from "@src/components/challenges/nav";
import { Timer } from "@src/components/challenges/timer";
import Editor from "@src/components/sandbox/editor";
import { YStack } from "@src/components/stack";
import { ApiRoutes } from "@src/utils/routes";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const submitButton = (
  <Button type={"blue900"} css={{ width: "$space$134" }}>
    Submit Test
  </Button>
);

const SandBox = () => {
  const router = useRouter();
  let userName = "";
  const { sandbox } = router.query;
  const [codeBlocks, setCodeBlocks] = useState<CodeBlocks>();

  if (typeof window !== "undefined") {
    userName = localStorage.getItem("userName") || "";
  }

  useEffect(() => {
    const controller = new AbortController();

    const fetchCode = async () => {
      await fetch(ApiRoutes.getCodeBlocks(userName, sandbox as string), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setCodeBlocks(data);
        });
    };
    fetchCode();

    return () => controller.abort();
  }, [sandbox, userName]);

  return (
    <YStack>
      <ChallengesNav
        navTitle="Code Cube"
        showCountdown={<Timer />}
        actionButton={submitButton}
        showBackButton={true}
        showDate={true}
      />
      {codeBlocks ? (
        <Editor
          codeBlocks={{
            ...codeBlocks,
            id: codeBlocks.id.toString(),
            challengeId: codeBlocks.challengeId.toString(),
          }}
        />
      ) : (
        <Editor />
      )}
    </YStack>
  );
};

export default SandBox;

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  return { props: {} };
};
