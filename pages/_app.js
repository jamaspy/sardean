import { Space_Grotesk } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});
function MyApp({ Component, pageProps }) {
  return (
    <main className={`${space.variable} font-sans`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}

export default MyApp;
