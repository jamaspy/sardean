import Head from "next/head";
import Image from "next/image";
import sardean from "../public/sardean.png";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sardean</title>
        <meta name="description" content="Cafe & Store Whale Beach, NSW" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={sardean} alt="sardean" quality={100} width={600} />
        <h1 className="text-xl">Whale Beach, NSW</h1>
        <h2 className="font-thin">Cafe &amp; Store Coming Soon</h2>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          sardean
        </a>
      </footer>
    </div>
  );
}