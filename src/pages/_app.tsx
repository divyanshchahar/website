import "@/styles/globals.css";
import Footer from "@/ui/layouts/Footer";
import TopNavBar from "@/ui/layouts/TopNavBar";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopNavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
