import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], // você pode ajustar conforme necessidade
});

export const metadata: Metadata = {
  title: "Portfolio - Nícolas Monteiro",
  description: "Created by Nícolas Monteiro",
  authors: [{ name: "Nícolas Monteiro", url: "https://www.linkedin.com/in/nícolas-monteiro-5237b2282" }],
  creator: "Nícolas Monteiro",
  keywords: [
    "Portfolio",
    "Nícolas Monteiro",
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Sass",
    "SCSS",
    "Styled Components",
    "Bootstrap",
    "Figma",
  ],
  openGraph: {
    title: "Portfólio - Nícolas Monteiro",
    description: "Created by Nícolas Monteiro",
    url: "https://nicolasmonteiro.dev",
    siteName: "Portfolio - Nícolas Monteiro",
    images: [
      {
        url: "https://nicolasmonteiro.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Portfolio - Nícolas Monteiro",
      },
    ],
    locale: "en-US",
    type: "website",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
