import { profileAtom } from "@src/atoms/resume";
import { StyledImage } from "@src/components/image";
import { useAtomValue } from "jotai";

export const ProfileImages = () => {
  const profile = useAtomValue(profileAtom);

  return (
    <>
      <StyledImage
        src={profile.cover}
        css={{
          height: "$space$68",
          objectFit: "cover",
        }}
      />
      <StyledImage
        src={profile.avatar}
        css={{
          width: "$space$56",
          height: "$space$56",
          boxShadow: "0 0 0 $space$2 white",
          alignSelf: "center",
          marginTop: "-$space$32",
          objectFit: "cover",
        }}
        circle
      />
    </>
  );
};
