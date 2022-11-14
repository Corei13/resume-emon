import { profileAtom } from "@src/atoms/resume";
import { Typography } from "@src/components/typography";
import { useAtomValue } from "jotai";

export const ProfileInfo = () => {
  const profile = useAtomValue(profileAtom);

  return (
    <>
      <Typography
        variant="xl"
        align="center"
        css={{ paddingTop: "$10", fontWeight: "$bold" }}
      >
        {profile.name}
      </Typography>

      {!!profile.bio && (
        <Typography
          variant="xxs"
          align="center"
          color="$gray800"
          css={{
            paddingTop: "$8",
            width: "40%",
            margin: "0 auto",
            lineHeight: "$xs",
          }}
        >
          {profile.bio}
        </Typography>
      )}
    </>
  );
};
