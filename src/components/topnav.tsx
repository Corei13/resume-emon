import { XStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import { Icon } from "@src/components/icon";
import { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { useAtomValue } from "jotai";
import { ApiRoutes } from "@src/utils/routes";
import { usernameAtom } from "@src/atoms/username";
import { resumeAtom } from "@src/atoms/resume";

const PDF = dynamic(() => import("@src/components/pdf/pdf"), {
  ssr: false,
});

export const TopNav = () => {
  const username = useAtomValue(usernameAtom);
  const resume = useAtomValue(resumeAtom);
  const [loading, saveLoading] = useState(false);

  const handleSaveClick = useCallback(async () => {
    saveLoading(true);
    try {
      fetch(ApiRoutes.saveResume(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resume, username }),
      });
    } catch (e) {}
    saveLoading(false);
  }, [resume, username]);

  return (
    <XStack
      justifyContent="space-between"
      css={{
        paddingX: "$16",
        paddingY: "$8",
        borderBottom: "2px solid $gray200",
      }}
    >
      <XStack space={"$8"}>
        <Icon name="logo" />{" "}
        <Typography
          variant="xs"
          color="$primary"
          css={{ fontWeight: "$bold", alignSelf: "center" }}
        >
          re:sume
        </Typography>
      </XStack>
      <XStack space={"$16"}>
        <PDF
          callbackFn={(args) => (
            <a href={args.url || ""} download="Resume.pdf">
              <XStack space={"$8"} css={{ cursor: "pointer" }}>
                <Icon name="save" css={{ rotate: "180deg" }} />
                <Typography variant="sm" css={{ alignSelf: "center" }}>
                  Export PDF
                </Typography>
              </XStack>
            </a>
          )}
        />

        {loading ? (
          <Typography variant="sm" css={{ alignSelf: "center" }}>
            Saving...
          </Typography>
        ) : (
          <XStack
            space={"$8"}
            css={{ cursor: "pointer" }}
            onClick={handleSaveClick}
          >
            <Icon name="save" />
            <Typography variant="sm" css={{ alignSelf: "center" }}>
              Save
            </Typography>
          </XStack>
        )}
      </XStack>
    </XStack>
  );
};
