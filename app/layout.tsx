import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PESTIS.MONITOR — Siberian Pneumonic Plague Outbreak Surveillance",
  description: "Surveillance terminal monitoring the pneumonic plague incident in Irkutsk, Siberia, Russia, and international containment vectors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-[#F8FAFC]">
        {children}
      </body>
    </html>
  );
}
