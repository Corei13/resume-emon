import { LoginModal } from "@src/components/authentication/loginModal";
import { XStack } from "@src/components/stack";
import { styled } from "@src/stitches.config";
import Image from "next/image";

const StyledImage = styled(Image, {
  objectFit: "contain",
  width: "100% !important",
  position: "relative !important",
  height: "unset !important",
});

const Login = () => {
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
        <LoginModal />
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

export default Login;
