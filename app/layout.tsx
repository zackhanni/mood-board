import type { Metadata } from "next";
// import { SessionProvider } from "next-auth/react";

import "./globals.css";
import AuthProvider from "./components/AuthProvider";

export const metadata: Metadata = {
  title: "Emotional Intelligence",
  description:
    "Lean about your emotions and how to better express your feelings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <AuthProvider>{children}</AuthProvider>
        </main>
      </body>
    </html>
  );
}
