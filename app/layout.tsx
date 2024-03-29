import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "./components/AuthProvider";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "Mood Board",
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
        <AuthProvider>
          <Nav />
          <main className="pt-16">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
