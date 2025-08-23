import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wekil",
  description: "Wekil is informal contact management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
