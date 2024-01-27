import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "./components/AuthProvider";
import Nav from "./components/Nav";

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
        <AuthProvider>
          <Nav />
          <main className="mt-16">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
