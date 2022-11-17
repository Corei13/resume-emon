import { Button } from "@src/components/button";
import { Google } from "@src/components/icons/google";
import { Resume } from "@src/components/icons/resume";
import { XStack, YStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import { useRouter } from "next/router";

export const LoginModal = () => {
  const router = useRouter();

  const signInButtonClicked = (e) => {
    e.preventDefault();
    router.push("/my-resumes/dashboard");
  };

  return (
    <YStack
      css={{
        backgroundColor: "$white",
        height: "$space$532",
        width: "$space$580",
        margin: "auto",
        boxShadow: "0px 16px 29px 0px #00000014",
        borderRadius: "$space$12",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Resume />
      <Typography
        color="$gray500"
        css={{ paddingTop: "$20", paddingBottom: "$64" }}
      >
        Sign in and Build your perfect resume
      </Typography>
      <Button
        type={"white"}
        css={{ margin: "0", width: "$space$322" }}
        onClick={signInButtonClicked}
      >
        <XStack
          alignItems="center"
          css={{ justifyContent: "center", gap: "$8" }}
        >
          <Google /> Sign In with Google
        </XStack>
      </Button>
    </YStack>
  );
};
