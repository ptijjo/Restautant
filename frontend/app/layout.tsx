import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/lib/Provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Réservia",
  description: "Réservation de repas directement au restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="flex flex-col justify-center items-center max-w-7xl min-h-dvh m-auto border">
        <Provider>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
