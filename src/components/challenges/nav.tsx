import { PrimaryButon } from "@src/components/button";
import { Bell } from "@src/components/icons/bell";
import { StaticProfilePicture } from "@src/components/icons/staticProfilePicture";
import { XStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";

export const ChallengesNav = () => {
  return (
    <XStack
      css={{
        width: "100%",
        height: "$space$96",
        alignItems: "center",
        borderBottom: "1px solid #EEEFF0",
        backgroundColor: "$white",
        marginBottom: "$40",
        // boxShadow: "0px 16px 29px 0px #00000014",
      }}
      sticky={true}
    >
      <Typography variant="h4" color="$gray900">
        Code Cube
      </Typography>
      <XStack css={{ marginLeft: "auto", alignItems: "center", gap: "$10" }}>
        <PrimaryButon width={"$space$128"} label={"Start Text"} />
        <Bell />
        <StaticProfilePicture />
      </XStack>
    </XStack>
  );
};
