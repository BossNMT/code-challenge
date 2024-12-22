import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";
import MainLayout from "@/layouts/MainLayout";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/providers/ThemeProvider";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MetaBlog",
  description: "MetaBlog Description",
  keywords: ["Home", "Blog", "Technology", "Post", "MetaBlog"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${workSans.className} antialiased`}>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <MainLayout>{children}</MainLayout>
            <Toaster />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
