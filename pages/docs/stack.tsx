import { XStack, YStack } from "@src/components/stack";
import { Typography } from "@src/components/typography";

export default function StackDemo() {
  return (
    <XStack
      css={{
        minHeight: "100vh",
        background: "$example1", // check stitches.config.ts to see how this color is defined
      }}
      // padding can take either a unit or a array of units with 1, 2 or 4 elements
      // padding={[right, top, left, bottom]} sets paadding for each side
      // padding={[horizontal, vertical]} sets padding for horizontal and vertical, equivalent to [horizontal, vertical, horizontal, vertical]
      // padding={[unit]} and padding={unit} sets padding for all sides, equivalent to [unit, unit, unit, unit]
      padding={8}
      // space takes a unit and sets the space between each child
      space={16}
      // this will show a blue border around all Stack elements, use this on development to see how the Stack is behaving
      DEV_outline
    >
      {/* let's make a sidebar with some menu */}
      <YStack
        css={{
          minWidth: "200px",
          width: "25vw",
        }}
        padding={8}
      >
        <YStack
          padding={[8, 16]}
          space={16}
          // grow will make the Stack grow to fill the available space
          grow
        >
          <Typography variant="md">Menu 1</Typography>
          <Typography variant="md">Menu 1</Typography>
          <Typography variant="md">Menu 1</Typography>
        </YStack>
        <YStack padding={[8, 16]}>
          <Typography variant="md">footer</Typography>
        </YStack>
      </YStack>
      <YStack grow space={32}>
        <XStack
          css={{
            height: 100,
          }}
          justifyContent="space-between"
          padding={20}
        >
          <XStack css={{ width: "25%" }}>Box 1</XStack>
          <XStack css={{ width: "25%" }}>Box 2</XStack>
          <XStack css={{ width: "25%" }}>Box 3</XStack>
        </XStack>
        <YStack space={32} alignItems="center">
          {[200, 400, 500, 100, 300].map((width, index) => (
            <XStack
              key={index}
              css={{ height: 100, width }}
              justifyContent="center"
              alignItems="center"
            >
              width: {width}
            </XStack>
          ))}
        </YStack>
      </YStack>
    </XStack>
  );
}
