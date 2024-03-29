import BottomBar from "@/components/shared/bottombar";
import LeftSideBar from "@/components/shared/leftSideBar";
import RightSideBar from "@/components/shared/rightSideBar";
import TopBar from "@/components/shared/topbar";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}
  >
    <html lang="en">
      <body className={inter.className}>
        <TopBar/>
        <main>
          <LeftSideBar />
          <section className="main-container">
            <div className="w-full max-w-4xl">{children}</div>
          </section>
          <RightSideBar />
        </main>
        <BottomBar/>
      </body>
    </html>
    </ClerkProvider>
  );
}
