"use client";
import { Terminal } from "@xterm/xterm";
import { useRef, useEffect } from "react";
import "@xterm/xterm/css/xterm.css";

export default function BTerminal() {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const term = new Terminal({
      cursorBlink: true,
      cursorInactiveStyle: "outline",
      theme: {
        background: "#171717",
      },
    });

    if (terminalRef.current) {
      term.open(terminalRef.current);
      term.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
      term.onKey((e) => {
        console.log(e.key);

        if (e.domEvent.key === "Enter") {
          term.writeln("");
          term.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
        } else {
          term.write(e.key);
        }
      });
    }

    return () => {
      term.dispose();
    };
  }, []);

  return (
    <div className="flex fixed z-40 h-screen bg-black/70 w-full justify-center items-center">
      <div
        ref={terminalRef}
        className="w-11/12 lg:w-2/3 rounded-2xl border border-[var(--border)] bg-[var(--card)]"
      ></div>
    </div>
  );
}
