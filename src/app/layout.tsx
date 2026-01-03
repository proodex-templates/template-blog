import type { Metadata } from "next";
import "@/styles/globals.css"; // Import the global CSS
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/config/variables";
import { ThemeProvider } from "@/context/theme-provider";
import { Header } from "./layout/header";
import { Footer } from "./layout/footer";
import { Toaster } from "@/components/ui/toaster"; // Assuming shadcn Toaster is available
import { ClientScriptHandler } from "@/client-script-handler";

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
        )}
      >
        <ThemeProvider
          
          defaultTheme="system"
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <ClientScriptHandler />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}