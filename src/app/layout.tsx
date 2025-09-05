import type { Metadata } from "next";
import { Outfit, Roboto } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ['400', '700'],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ['400', '700'],
  display: "swap"
});

export const metadata: Metadata = {
  title: "EduNest - Learn Grow and Achieve",
  description:
    "EduNest is a modern Learning Management System (LMS) where learners can explore courses, track progress, and access interactive study materials.",
  keywords: [
    "EduNest",
    "Learning Management System",
    "LMS",
    "Online Courses",
    "E-learning",
    "Study Platform",
    "Skill Development",
    "Next.js LMS",
    "Education",
  ],
  authors: [{ name: "Mohibullah Mohim" }],
  openGraph: {
    title: "EduNest - Modern Learning Management System",
    description:
      "Discover courses, manage your learning progress, and unlock knowledge with EduNest LMS.",
    // url: "https://edunest.vercel.app",
    url: "http://localhost:3000",
    siteName: "EduNest",
    images: [
      {
        url: "/og-image.png", // replace with your actual image path
        width: 1200,
        height: 630,
        alt: "EduNest LMS Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EduNest - Modern Learning Management System",
    description:
      "Discover courses, manage your learning progress, and unlock knowledge with EduNest LMS.",
    images: ["/og-image.png"], // replace with your image path
    creator: "@edunest",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="en">
      <body
        className={`${outfit.variable} ${roboto.variable} antialiased`}
      >
        <Navber />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
        <Footer />
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
