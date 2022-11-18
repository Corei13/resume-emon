import { ChallengeCard } from "@src/components/challenges/challengeCard";
import { ChallengesNav } from "@src/components/challenges/nav";
import { XStack, YStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";

export const AllChallenges = () => {
  return (
    <YStack css={{ width: "100%" }}>
      <ChallengesNav navTitle="Challenges" noBorder={true} />
      <YStack space={"$24"} css={{ paddingX: "$40" }}>
        <Typography variant="xs" color="$gray500">
          06 Challenges showing
        </Typography>
        <XStack wrap={true}>
          <ChallengeCard
            thumbnailImagePath="codeCubeThumbnail.png"
            date="Nov 20, 2022"
            title="Code Cube"
            owner="re:cruit"
            description="Code Cube are designers, developers and entrepreneur
            that are dedicated to create digital solutions to every of
            your branding needs."
            skills={[
              {
                stackName: "React",
                backgroundColor: "$colors$blue100",
                color: "$colors$blue800",
              },
              {
                stackName: "CSS",
                backgroundColor: "$colors$yellow100",
                color: "$colors$yellow800",
              },
              {
                stackName: "HTML",
                backgroundColor: "$colors$violet100",
                color: "$colors$violet800",
              },
            ]}
          />
          <ChallengeCard
            thumbnailImagePath="heroHeaderThumbnail.png"
            date="Oct 31, 2022"
            title="Hero header"
            owner="re:tune"
            description="Hero header are designers, developers and entrepreneur
            that are dedicated to create digital solutions to every of
            your branding needs."
            skills={[
              {
                stackName: "React",
                backgroundColor: "$colors$blue100",
                color: "$colors$blue800",
              },
              {
                stackName: "CSS",
                backgroundColor: "$colors$yellow100",
                color: "$colors$yellow800",
              },
            ]}
          />
          <ChallengeCard
            thumbnailImagePath="prototypeThumbnail.png"
            date="Oct 31, 2022"
            title="Prototype"
            owner="Prism"
            description="Hero header are designers, developers and entrepreneur
            that are dedicated to create digital solutions to every of
            your branding needs."
            skills={[
              {
                stackName: "CSS",
                backgroundColor: "$colors$yellow100",
                color: "$colors$yellow800",
              },
              {
                stackName: "HTML",
                backgroundColor: "$colors$violet100",
                color: "$colors$violet800",
              },
            ]}
          />
          <ChallengeCard
            thumbnailImagePath="prototypeThumbnail2.png"
            date="Oct 31, 2022"
            title="Prototype"
            owner="Prism"
            description="Hero header are designers, developers and entrepreneur
            that are dedicated to create digital solutions to every of
            your branding needs."
            skills={[
              {
                stackName: "React",
                backgroundColor: "$colors$blue100",
                color: "$colors$blue800",
              },
            ]}
          />
          <ChallengeCard
            thumbnailImagePath="codeCubeThumbnail2.png"
            date="Nov 20, 2022"
            title="Code Cube"
            owner="re:cruit"
            description="Code Cube are designers, developers and entrepreneur
            that are dedicated to create digital solutions to every of
            your branding needs."
            skills={[
              {
                stackName: "HTML",
                backgroundColor: "$colors$violet100",
                color: "$colors$violet800",
              },
            ]}
          />
          <ChallengeCard
            thumbnailImagePath="heroHeaderThumbnail2.png"
            date="Oct 31, 2022"
            title="Hero header"
            owner="re:tune"
            description="Hero header are designers, developers and entrepreneur
            that are dedicated to create digital solutions to every of
            your branding needs."
            skills={[
              {
                stackName: "React",
                backgroundColor: "$colors$blue100",
                color: "$colors$blue800",
              },
              {
                stackName: "CSS",
                backgroundColor: "$colors$yellow100",
                color: "$colors$yellow800",
              },
            ]}
          />
        </XStack>
      </YStack>
    </YStack>
  );
};
