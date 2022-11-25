import { XStack } from "@src/components/stack";
import { styled } from "@src/stitches.config";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const StyledImage = styled(Image, {
  objectFit: "contain",
  width: "100% !important",
  position: "relative !important",
  height: "unset !important",
});

export const LoginView = ({ modal }: { modal: React.ReactNode }) => {
  return (
    <XStack css={{ width: "100%" }}>
      <XStack
        css={{
          backgroundImage: `url("/assets/icons/loginLeftBackground.png")`,
          width: "60%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {modal}
      </XStack>
      <XStack css={{ width: "40%", position: "relative" }}>
        <StyledImage
          src={"/assets/icons/loginRightBackground.png"}
          alt="Login Right Background"
          layout="fill"
        />
      </XStack>
    </XStack>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/challenges",
      },
    };
  }

  return { props: {} };
};

export default LoginView;
