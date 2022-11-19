import { HomeLeftBar } from "@src/components/challenges/leftBar";
import { ResumeBody } from "@src/components/myResumes/resumeBody";
import { XStack } from "@src/components/stack";
import { NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";

export const Resumes = () => {
  const { data: session } = useSession();

  return (
    <XStack>
      <HomeLeftBar />
      <ResumeBody />
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

export default Resumes;
