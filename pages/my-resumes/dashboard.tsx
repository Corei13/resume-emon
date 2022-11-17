import { HomeLeftBar } from "@src/components/challenges/leftBar";
import { ResumeBody } from "@src/components/myResumes/resumeBody";
import { XStack } from "@src/components/stack";

export const Dashboard = () => {
  return (
    <XStack>
      <HomeLeftBar />
      <ResumeBody />
    </XStack>
  );
};

export default Dashboard;
