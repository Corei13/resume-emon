import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { styled, keyframes } from "@stitches/react";
import { whiteA } from "@radix-ui/colors";

export const ModalBody = ({
  children,
  body,
}: {
  children: React.ReactNode;
  body: React.ReactNode;
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <DialogOverlay />
      <DialogContent>{body}</DialogContent>
    </Dialog.Root>
  );
};

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: whiteA.whiteA11,
  position: "fixed",
  inset: 0,
  marginLeft: "$space$180",
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const DialogContent = styled(Dialog.Content, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0 $space$10 $space$38 -$space$10, hsl(206 22% 7% / 20%) 0 $space$10 $space$20 -$space$16",
  position: "fixed",
  top: "50%",
  left: "calc(50% + $space$90)",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "$space$580",
  maxHeight: "$space$448",
  padding: "$space$24",
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  "&:focus": { outline: "none" },
});
