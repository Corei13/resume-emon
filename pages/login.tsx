import { LoginModal } from "@src/components/authentication/loginModal";
import LoginView from "@src/components/loginView";
import { NextPageContext } from "next";
import { getSession, signIn, useSession } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  return (
    <LoginView
      modal={<LoginModal signIn={() => signIn()} session={session} />}
    />
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/set-username",
      },
    };
  }

  return { props: {} };
};

export default Login;
