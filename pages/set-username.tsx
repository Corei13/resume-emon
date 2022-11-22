import { LoginModal } from "@src/components/authentication/loginModal";
import LoginView from "@src/components/loginView";
import { getUser } from "@src/controllers/databaseController";
import { ApiRoutes } from "@src/utils/routes";
import { NextPageContext } from "next";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = ({
  email,
  existedUserName,
}: {
  email?: string;
  existedUserName?: string;
}) => {
  const { data: session } = useSession();
  const [userName, setUserName] = useState("");
  const [userNameExist, setUserNameExist] = useState(false);

  const router = useRouter();

  if (existedUserName && typeof window !== "undefined") {
    localStorage.setItem("userName", existedUserName);
    router.push("/resumes");
  }

  const onSetUNameButtonClick = async () => {
    try {
      const response = await fetch(ApiRoutes.username(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          email,
        }),
      });
      if (response.status !== 200) {
        setUserNameExist(true);
      } else {
        localStorage.setItem("userName", userName);
        router.push("/resumes");
      }
    } catch (e) {}
  };

  return (
    <LoginView
      modal={
        <LoginModal
          signIn={() => signIn()}
          session={session}
          userNameExist={userNameExist}
          userName={userName}
          setUserName={(username: string) => setUserName(username)}
          onSetUNameButtonClick={onSetUNameButtonClick}
        />
      }
    />
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  const existedUser = await getUser(session?.user?.email as string);

  return {
    props: {
      email: session.user?.email,
      existedUserName: existedUser?.username ? existedUser?.username : "",
    },
  };
};

export default Login;
