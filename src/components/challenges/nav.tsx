import { BellIcon } from "@src/components/icons/bell";
import { XStack, YStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import Image from "next/image";
import React from "react";
import { BackButtonIcon } from "@src/components/icons/backButton";
import { useRouter } from "next/router";
import { MonthShortNames } from "@src/utils/constants";

export const ChallengesNav = ({
  navTitle,
  showBackButton,
  noBorder,
  showDate,
  showCountdown,
  actionButton,
  searchInput,
}: {
  navTitle: string;
  showBackButton?: boolean;
  noBorder?: boolean;
  showDate?: boolean;
  showCountdown?: React.ReactNode;
  actionButton?: React.ReactNode;
  searchInput?: React.ReactNode;
}) => {
  const date = new Date(Date.now());
  const dateString = `${
    MonthShortNames[Number(date.getMonth())]
  } ${date.getDate()}, ${date.getFullYear()}`;

  const router = useRouter();

  return (
    <XStack
      justifyContent="space-between"
      css={{
        paddingLeft: `${showBackButton ? "0" : "$space$40"}`,
        paddingRight: "$40",
        width: "100%",
        height: "$space$96",
        alignItems: "center",
        borderBottom: `${noBorder ? "0" : "1px solid #EEEFF0"}`,
        backgroundColor: "$white",
      }}
      sticky={true}
    >
      <XStack css={{ width: "45%", height: "100%" }}>
        {showBackButton && (
          <XStack
            alignItems="center"
            css={{
              width: "$space$40",
              height: "100%",
              cursor: "pointer",
            }}
          >
            <XStack css={{ margin: "auto" }} onClick={() => router.back()}>
              <BackButtonIcon />
            </XStack>
          </XStack>
        )}
        <XStack space={"$16"} css={{ textAlign: "center", height: "100%" }}>
          <YStack
            css={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {showDate && (
              <Typography
                variant="xs"
                color="$gray500"
                css={{
                  marginRight: "auto",
                }}
              >
                {dateString}
              </Typography>
            )}
            <Typography variant="h4" color="$gray900">
              {navTitle}
            </Typography>
          </YStack>
          {searchInput && (
            <XStack
              alignItems="center"
              css={{ marginRight: "auto", height: "100%" }}
            >
              {searchInput}
            </XStack>
          )}
        </XStack>
      </XStack>

      {showCountdown && (
        <XStack justifyContent="center" css={{ width: "10%" }}>
          {showCountdown}
        </XStack>
      )}
      <XStack
        alignItems="center"
        space={"$10"}
        css={{
          justifyContent: "flex-end",
          width: "45%",
        }}
      >
        {actionButton && <XStack>{actionButton}</XStack>}
        <BellIcon />
        <XStack
          css={{
            overflow: "hidden",
            borderRadius: "100%",
            height: "$32",
            width: "$32",
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
