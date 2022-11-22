import { Button } from "@src/components/button";
import { XStack, YStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import { styled } from "@src/stitches.config";
import { ApiRoutes } from "@src/utils/routes";
import { useRouter } from "next/router";
import { useState } from "react";

const UserNameInput = styled("input", {
  height: "2.75rem",
  width: "100%",
  border: "1px solid $colors$gray200",
  borderRadius: "0.375rem",
  paddingX: "1em",
});

export const SetResumeTitle = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const createResumeClicked = async () => {
    try {
      await fetch(ApiRoutes.createEmptyResume(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          username: localStorage.getItem("userName"),
        }),
      })
        .then((response) => response.json())
        .then((data) => router.push(`/resume/${data.id}`));
    } catch (e) {}
  };

  return (
    <YStack css={{ width: "520px" }}>
      <XStack alignItems="center" css={{ width: "100%", marginBottom: "$24" }}>
        <Typography variant="h4" color="$gray900">
          Set Resume Title
        </Typography>
      </XStack>
      <UserNameInput onChange={(e) => setTitle(e.target.value)} />
      <XStack padding={"2rem 0"}>
        <Button
          type={"blue900"}
          css={{
            width: "100%",
            height: "$space$48",
            "&:disabled": {
              cursor: "not-allowed",
            },
          }}
          onClick={createResumeClicked}
          disabled={title.length <= 0}
        >
          Create resume →
        </Button>
      </XStack>
    </YStack>
  );
};
