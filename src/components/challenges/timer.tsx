import { Clock } from "@src/components/icons/clock";
import { XStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import Countdown from "react-countdown";

const renderer = ({
  hours,
  minutes,
  seconds,
}: {
  hours: string;
  minutes: string;
  seconds: string;
}) => {
  return (
    <XStack>
      {hours}:{minutes}:
      <Typography css={{ color: "$blue900" }}>{seconds}</Typography>
    </XStack>
  );
};

export const Timer = () => {
  return (
    <XStack space={"$8"} css={{ width: "100%" }}>
      <Clock />
      <Countdown date={Date.now() + 1000000000} renderer={renderer} />
    </XStack>
  );
};
