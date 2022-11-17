import { LoginModal } from "@src/components/authentication/loginModal";
import { XStack } from "@src/components/stack";
import { styled } from "@src/stitches.config";

const Img = styled("img", {
  height: "100vh",
  width: "auto",
  margin: "0 auto",
});

const Login = () => {
  return (
    <XStack css={{ width: "100vw", justifyContent: "space-between" }}>
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
      <Img src="/assets/icons/loginRightBackground.png" />
    </XStack>
  );
};

export default Login;
