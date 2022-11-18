import { XStack, YStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import Image from "next/image";

export type TSkill = {
  stackName: string;
  backgroundColor: string;
  color: string;
};

export const ChallengeCard = ({
  thumbnailImagePath,
  date,
  title,
  owner,
  description,
  skills,
}: {
  thumbnailImagePath: string;
  date: string;
  title: string;
  owner: string;
  description: string;
  skills: TSkill[];
}) => {
  return (
    <XStack css={{ paddingBottom: "$space$50", paddingRight: "$space$28" }}>
      <YStack
        css={{
          width: "$space$350",
          height: "$space$300",
          borderRadius: "$space$8",
          border: "$space$1 solid $gray200",
          "&:hover": {
            boxShadow: "0 $space$16 $space$24 $space$6 $colors$gray200",
          },
        }}
      >
        <Image
          src={`/assets/icons/${thumbnailImagePath}`}
          alt={`${title} thumbnail`}
          height={124}
          width={350}
        />
        <YStack css={{ padding: "$16" }}>
          <Typography variant="xs" color="$gray500">
            {date}
          </Typography>
          <XStack
            alignItems="center"
            space={"$8"}
            css={{ paddingBottom: "$10" }}
          >
            <Typography variant="md" weight="bold">
              {title}
            </Typography>
            <Typography variant="xs">by {owner}</Typography>
          </XStack>
          <XStack
            css={{
              height: "$54",
              overflow: "hidden",
            }}
          >
            <Typography
              variant="xs"
              color="$gray500"
              css={{
                lineHeight: "$space$18",
              }}
            >
              {description}
            </Typography>
          </XStack>
          <XStack space={"$8"} css={{ paddingTop: "$16" }}>
            {skills.map((skill: TSkill, index) => (
              <XStack
                key={index}
                alignItems="center"
                css={{
                  height: "$space$22",
                  backgroundColor: `${skill.backgroundColor}`,
                  borderRadius: "$space$6",
                }}
              >
                <Typography
                  variant="xxs"
                  color={`${skill.color}`}
                  css={{
                    paddingX: "$space$8",
                  }}
                >
                  {skill.stackName}
                </Typography>
              </XStack>
            ))}
          </XStack>
        </YStack>
      </YStack>
    </XStack>
  );
};
