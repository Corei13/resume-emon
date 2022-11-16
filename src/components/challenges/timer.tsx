import { Clock } from "@src/components/icons/clock";
import { XStack } from "@src/components/stack";
import Countdown from "react-countdown";

const renderer = ({
  hours,
  minutes,
  seconds,
  completed,
}: {
  hours: string;
  minutes: string;
  seconds: string;
  completed: boolean;
}) => {
  return (
    <XStack>
      {hours}:{minutes}:<XStack css={{ color: "$violet" }}>{seconds}</XStack>
    </XStack>
  );
};

export const Timer = () => {
  return (
    <XStack css={{ gap: "$8", width: "100%" }}>
      <Clock />
      <Countdown date={Date.now() + 1000000000} renderer={renderer} />
    </XStack>
  );
};
