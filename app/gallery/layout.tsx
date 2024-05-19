import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie - générateur de mèmes",
  description: "Générer un mème",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    children
  );
}
