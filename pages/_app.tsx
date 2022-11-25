import "../styles/globals.css";
import "@code-hike/mdx/dist/index.css";

import type { AppProps } from "next/app";
import { Provider } from "jotai";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
