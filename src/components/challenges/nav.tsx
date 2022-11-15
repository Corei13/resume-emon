import { Bell } from "@src/components/icons/bell";
import { XStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import { PrimaryButton } from "@src/components/button";
import { ModalBody } from "@src/components/modal/modalBody";
import { TaskModalContent } from "@src/components/modal/taskModalContent";
import Image from "next/image";

export const ChallengesNav = () => {
  return (
    <XStack
      css={{
        marginX: "$40",
        width: "100%",
        height: "$space$96",
        alignItems: "center",
        borderBottom: "1px solid #EEEFF0",
        backgroundColor: "$white",
      }}
      sticky={true}
    >
      <Typography variant="h4" color="$gray900">
        Code Cube
      </Typography>
      <XStack
        css={{
          marginLeft: "auto",
          alignItems: "center",
          gap: "$10",
        }}
      >
        <ModalBody body={<TaskModalContent />}>
          <PrimaryButton css={{ width: "$space$128" }}>
            Start Test
          </PrimaryButton>
        </ModalBody>
        <Bell />
        <XStack
          css={{
            overflow: "hidden",
            borderRadius: "100%",
            height: "32px",
            width: "32px",
          }}
        >
          <Image
            src="/assets/icons/tempDP.png"
            alt="a cube"
            height="32px"
            width="32px"
          ></Image>
        </XStack>
      </XStack>
    </XStack>
  );
};
