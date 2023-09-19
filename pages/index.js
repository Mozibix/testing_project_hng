import Image from "next/image";
import { Inter } from "next/font/google";
import ImageGrid from "./(components)/ImageGrid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <ImageGrid />
    </main>
  );
}
