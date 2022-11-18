import { LoginModal } from "@src/components/authentication/loginModal";
import { XStack } from "@src/components/stack";
import { styled } from "@src/stitches.config";
import { NextPageContext } from "next";
import { getSession, signIn, useSession } from "next-auth/react";
import Image from "next/image";

const StyledImage = styled(Image, {
  objectFit: "contain",
  width: "100% !important",
  position: "relative !important",
  height: "unset !important",
});

const Login = () => {
  const { data: session } = useSession();

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
        <LoginModal signIn={() => signIn()} session={session} />
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
        destination: "/resumes",
      },
    };
  }

  return { props: {} };
};

export default Login;
