import { usernameAtom } from "@src/atoms/username";
import { Button } from "@src/components/button";
import { XStack, YStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const TaskModalContent = () => {
  const router = useRouter();
  const { challengeId } = router.query;
  const [username] = useAtom(usernameAtom);

  return (
    <YStack css={{ width: "520px" }}>
      <XStack alignItems="center" css={{ width: "100%", marginBottom: "$24" }}>
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
        color="$blue900"
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
          height: "$158",
          width: "$518",
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
        <Link href={`/challenge/${username}/${challengeId}`}>
          <Button
            type={"blue900"}
            css={{ width: "$space$252", height: "$space$48" }}
          >
            Start Test
          </Button>
        </Link>
      </XStack>
    </YStack>
  );
};
