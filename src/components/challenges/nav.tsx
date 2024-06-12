import { Bell } from "@src/components/icons/bell";
import { XStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import { ModalBody } from "@src/components/modal/modalBody";
import { TaskModalContent } from "@src/components/modal/taskModalContent";
import Image from "next/image";
import { Button } from "@src/components/button";

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
        alignItems="center"
        css={{
          marginLeft: "auto",
          gap: "$10",
        }}
      >
        <ModalBody body={<TaskModalContent />}>
          <Button type={"violet"} css={{ width: "$space$128" }}>
            Start Test
          </Button>
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
            src="/assets/icons/staticProfilePicture.png"
            alt="profile picture"
            height="32px"
            width="32px"
          ></Image>
        </XStack>
      </XStack>
    </XStack>
  );
};
