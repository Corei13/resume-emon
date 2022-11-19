import "../styles/globals.css";
import "@code-hike/mdx/dist/index.css";

import type { AppProps } from "next/app";
import { Provider } from "jotai";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps, session }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
