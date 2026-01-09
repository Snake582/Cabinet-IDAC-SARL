import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Chatbot from "./Components/Chatbot";

export const metadata: Metadata = {
  title: "Cabinet IDAC SARL",
  description: "Agence immobilière et gestion de patrimoine au Sénégal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Remix Icon */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />

        {/* Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main className="p-6">{children}</main>
        <Chatbot />
      </body>
    </html>
  );
}
