import { Bell } from "@src/components/icons/bell";
import { XStack, YStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import Image from "next/image";
import React from "react";
import { BackButton } from "@src/components/icons/backButton";
import { useRouter } from "next/router";
import { MonthShortNames } from "@src/utils/constants";

export const ChallengesNav = ({
  showCountdown,
  showBackButton,
  showDate,
  actionButton,
}: {
  showCountdown?: React.ReactNode;
  showBackButton?: boolean;
  showDate?: boolean;
  actionButton?: React.ReactNode;
}) => {
  const date = new Date(Date.now());
  const dateString = `${
    MonthShortNames[Number(date.getMonth())]
  } ${date.getDate()}, ${date.getFullYear()}`;

  const router = useRouter();

  return (
    <XStack
      css={{
        paddingLeft: `${showBackButton ? "0" : "$space$40"}`,
        paddingRight: "$40",
        width: "100%",
        height: "$space$96",
        alignItems: "center",
        borderBottom: "1px solid #EEEFF0",
        backgroundColor: "$white",
      }}
      sticky={true}
    >
      {showBackButton && (
        <XStack
          css={{
            width: "$space$40",
            height: "100%",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <XStack css={{ margin: "auto" }} onClick={() => router.back()}>
            <BackButton />
          </XStack>
        </XStack>
      )}
      <YStack css={{ marginRight: "auto" }}>
        {showDate && (
          <Typography variant="xs" color="$gray500">
            {dateString}
          </Typography>
        )}
        <Typography variant="h4" color="$gray900">
          Code Cube
        </Typography>
      </YStack>
      {showCountdown && (
        <XStack css={{ margin: "auto", paddingLeft: "$40" }}>
          {showCountdown}
        </XStack>
      )}
      <XStack
        alignItems="center"
        css={{
          marginLeft: "auto",
          gap: "$10",
        }}
      >
        {actionButton && <XStack>{actionButton}</XStack>}
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
