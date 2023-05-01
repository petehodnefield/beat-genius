import "@/styles/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BeatGenius</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${pjs.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
