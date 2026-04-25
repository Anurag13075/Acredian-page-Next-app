import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/providers/ModalProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accredian | Next-Gen Expertise For Your Enterprise",
  description: "Cultivate high-performance teams through expert learning. Accredian delivers customized training programs in Data Science, Product Management, AI, and Leadership.",
  keywords: ["Corporate Training", "Enterprise Learning", "Data Science Courses", "Product Management Training", "Accredian"],
  openGraph: {
    title: "Accredian Enterprise Learning",
    description: "Expert training solutions tailored for your organization's success.",
    url: "https://enterprise.accredian.com",
    siteName: "Accredian",
    images: [{ url: "/assets/hero-professionals.png" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
