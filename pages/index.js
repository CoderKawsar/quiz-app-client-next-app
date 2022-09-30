import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quiz App | Home</title>
        <meta name="description" content="Technological Quiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-center text-4xl">Home</h1>
      </main>
    </div>
  );
}
