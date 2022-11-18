import { Button } from "@src/components/button";
import { XStack, YStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import Image from "next/image";
import Link from "next/link";

export const TaskModalContent = () => {
  return (
    <YStack css={{ width: "520px" }}>
      <XStack
        css={{ alignItems: "center", width: "100%", marginBottom: "$24" }}
      >
        <Typography variant="h4" color="$gray900">
          Code Cube
        </Typography>
        <XStack space={"$4"} css={{ marginLeft: "auto" }}>
          <Typography variant="sm" color="$gray500">
            Estimated time
          </Typography>
          <Typography variant="sm" color="$orange">
            12hrs
          </Typography>
        </XStack>
      </XStack>
      <Typography
        variant="md"
        color="$deepBlue"
        css={{
          fontWeight: "bold",
          lineHeight: "$space$18",
          marginBottom: "$10",
        }}
      >
        Task 1
      </Typography>
      <Typography color="$gray800" css={{ marginBottom: "$16" }}>
        Make the cube bounce on the edges and it should be on a loop.
      </Typography>
      <XStack
        css={{
          overflow: "hidden",
          borderRadius: "6px",
          height: "158px",
          width: "518px",
          marginBottom: "$20",
        }}
      >
        <Image
          src="/assets/icons/cube.png"
          alt="a cube"
          height="158px"
          width="515px"
        ></Image>
      </XStack>
      <XStack space={"$14"}>
        <Button
          type={"white"}
          css={{ width: "$space$252", height: "$space$48" }}
        >
          Go back
        </Button>
        <Link href={"/challenge/sandbox"}>
          <Button
            type={"deepBlue"}
            css={{ width: "$space$252", height: "$space$48" }}
          >
            Start Test
          </Button>
        </Link>
      </XStack>
    </YStack>
  );
};
