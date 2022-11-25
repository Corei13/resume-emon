import { Button } from "@src/components/button";
import { GoogleIcon } from "@src/components/icons/google";
import { ResumeIcon } from "@src/components/icons/resume";
import { UserNameErrorIcon } from "@src/components/icons/userNameErrorIcon";
import { BorderLessInput } from "@src/components/myResumes/resumeBody";
import { XStack, YStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import { styled } from "@src/stitches.config";
import { Session } from "next-auth";
import { useRouter } from "next/router";
import React from "react";

const UserNameInput = styled("input", {
  height: "2.75rem",
  width: "20.125rem",
  border: "1px solid $colors$gray200",
  borderRadius: "0.375rem",
  paddingX: "1em",
});

const SearchExistInput = ({
  userName,
  setUserName,
}: {
  userName?: string;
  setUserName: (userName: string) => void;
}) => (
  <XStack
    alignItems="center"
    space={"$10"}
    padding={"0 $space$20"}
    css={{
      border: "$space$1 solid $red500",
      height: "2.75rem",
      width: "20.125rem",
      borderRadius: "$space$6",
    }}
  >
    <BorderLessInput
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
    />
    <UserNameErrorIcon />
  </XStack>
);
export const LoginModal = ({
  signIn,
  session,
  userNameExist,
  userName,
  setUserName,
  onSetUNameButtonClick,
}: {
  signIn: () => void;
  session: Session | null;
  userName?: string;
  userNameExist?: boolean;
  setUserName?: (userName: string) => void;
  onSetUNameButtonClick?: () => void;
}) => {
  const router = useRouter();

  return (
    <YStack
      justifyContent="center"
      alignItems="center"
      css={{
        backgroundColor: "$white",
        height: "$space$532",
        width: "$space$580",
        margin: "auto",
        boxShadow: "0px $space$16 $space$28 #colors$gray200",
        borderRadius: "$space$12",
      }}
    >
      <ResumeIcon />
      <Typography
        color="$gray500"
        css={{ paddingTop: "$20", paddingBottom: "$64" }}
      >
        Sign in and Build your perfect resume
      </Typography>
      {session && setUserName ? (
        <YStack padding={["3rem", 0, 0, 0]}>
          <XStack padding={"0 0 1rem 0"} css={{ margin: "auto" }}>
            <Typography color="$colors$blue900">
              Hey {session?.user?.name?.split(" ")[0]},&nbsp;
            </Typography>

            <Typography>
              {userNameExist
                ? "let's pick another username"
                : "let's set up an username"}
            </Typography>
          </XStack>
          {userNameExist ? (
            <SearchExistInput userName={userName} setUserName={setUserName} />
          ) : (
            <UserNameInput
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            ></UserNameInput>
          )}
          <Button
            type={"blue900"}
            css={{ width: "20.125rem", marginTop: "2rem" }}
            onClick={onSetUNameButtonClick}
          >
            Let&apos;s go →
          </Button>
        </YStack>
      ) : (
        <Button
          type={"white"}
          css={{ margin: "0", width: "$space$322" }}
          onClick={() => signIn()}
        >
          <XStack justifyContent="center" alignItems="center" space={"$8"}>
            <GoogleIcon /> Sign In with Google
          </XStack>
        </Button>
      )}
    </YStack>
  );
};
