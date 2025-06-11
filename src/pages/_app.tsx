import "@/styles/globals.css";
import Footer from "@/ui/layouts/Footer";
import TopNavBar from "@/ui/layouts/TopNavBar";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <TopNavBar />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
