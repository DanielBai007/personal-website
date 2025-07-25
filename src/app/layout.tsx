import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "我的个人网站",
  description: "一个展示个人简历和作品的网站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-6 py-8">
            {children}
          </main>
          <footer className="w-full bg-gray-800 py-4 mt-8">
            <div className="container mx-auto text-center text-gray-400">
              © {new Date().getFullYear()} 我的个人网站. All Rights Reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
