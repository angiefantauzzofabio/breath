import type { Metadata } from "next";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Breath",
  description: "Breath landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        footer
      </body>
    </html>
  );
}
