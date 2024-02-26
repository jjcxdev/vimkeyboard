import Image from "next/image";
import Voyager from "./components/Voyager";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Voyager />
    </main>
  );
}
