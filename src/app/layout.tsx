import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Action Driving - Professional Stunt Driving Services",
  description: "Professional stunt driving services for film and entertainment industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme && ['default', 'light', 'high-contrast', 'solarized-dark'].includes(savedTheme)) {
                    // Remove all theme classes first
                    document.documentElement.classList.remove('theme-light', 'theme-high-contrast', 'theme-solarized-dark');

                    // Add the selected theme class (except for default which is on :root)
                    if (savedTheme !== 'default') {
                      document.documentElement.classList.add('theme-' + savedTheme);
                    }
                  }
                } catch (e) {
                  // Fail silently if localStorage is not available
                  console.error('Error accessing localStorage:', e);
                }
              })();
            `,
          }}
        />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
