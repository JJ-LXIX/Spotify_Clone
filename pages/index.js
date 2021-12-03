import Head from "next/head";
import Center from "../components/Center";
import { getSession } from "next-auth/react";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify 2.0</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="bg-black h-screen overflow-hidden ">
        <main className="flex">
          <Sidebar />
          <Center />
        </main>
      </div>

      <div>{/* Player  */}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
