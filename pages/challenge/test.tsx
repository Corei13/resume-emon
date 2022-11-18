import { ChallengeBody } from "@src/components/challenges/challengeBody";
import { XStack } from "@src/components/stack";
import { HomeLeftBar } from "@src/components/challenges/leftBar";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export const Test = () => {
  return (
    <XStack>
      <HomeLeftBar />
      <ChallengeBody />
    </XStack>
  );
};

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

export default Test;
