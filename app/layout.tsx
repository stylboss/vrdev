import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "vrdev | Visites Virtuelles 3D Professionnelles",
  description:
    "Visites virtuelles 3D professionnelles utilisant la technologie Matterport Pro2 4K pour l'immobilier, les espaces commerciaux et les événements.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          href="/apple-touch-icon-precomposed.png"
        />
        <style>
          {`
            :root {
              --font-inter: ${inter.style.fontFamily};
              --font-montserrat: ${montserrat.style.fontFamily};
            }
            .font-inter {
              font-family: var(--font-inter);
            }
            .font-montserrat {
              font-family: var(--font-montserrat);
            }
          `}
        </style>
      </head>
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="dot-pattern min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}