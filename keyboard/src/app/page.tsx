"use client";

import CommandDisplay from "./components/CommandDisplay";
import Voyager from "./components/Voyager";
import { ModeProvider } from "./utils/ModeContext.js";

export default function Home() {
  return (
    <ModeProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Voyager />
        <CommandDisplay />
      </main>
    </ModeProvider>
  );
}
