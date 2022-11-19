import { ClockIcon } from "@src/components/icons/clock";
import { XStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";
import { useEffect, useMemo, useState } from "react";

function useCountdown(initialTime: number) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    if (time <= 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

  const seconds = useMemo(() => time % 60, [time]);
  const minutes = useMemo(() => Math.floor(time / 60) % 60, [time]);
  const hours = useMemo(() => Math.floor(time / 3600), [time]);

  return { seconds, minutes, hours };
}

const Renderer = ({
  seconds,
  minutes,
  hours,
}: {
  seconds: number;
  minutes: number;
  hours: number;
}) => {
  return (
    <XStack>
      {hours}:{minutes}:
      <Typography css={{ color: "$blue900" }}>{seconds}</Typography>
    </XStack>
  );
};

export const Timer = () => {
  const time = useCountdown(10000);

  return (
    <XStack space={"$8"}>
      <ClockIcon />
      <Renderer {...time} />
    </XStack>
  );
};
