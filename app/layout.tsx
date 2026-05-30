import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoiceSearch for Discord — Search Voice Channel Conversations",
  description: "Transcribe Discord voice channels and search conversations by text with timestamps. Perfect for server admins, gaming communities, and remote teams.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6f5f8aa9-195a-4550-ae4e-31332e0dc7c3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
