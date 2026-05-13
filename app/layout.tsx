import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Context Window Optimizer – Maximize AI Output Quality",
  description: "Analyze AI prompts, estimate token usage, and automatically optimize context to fit within token limits while preserving quality."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="43a44ec7-1e92-4773-8758-933395d92846"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
