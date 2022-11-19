import { AllChallenges } from "@src/components/challenges/allChallenges";
import { HomeLeftBar } from "@src/components/challenges/leftBar";
import { XStack } from "@src/components/stack";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

const Challlenges = () => {
  return (
    <XStack>
      <HomeLeftBar />
      <AllChallenges />
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

export default Challlenges;
