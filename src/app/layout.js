import { Inter } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "@/Component/ContextProvider";
import ServiceContext from "@/Component/ServiceContext";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crown Technology",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ContextProvider>
            <ServiceContext>
            {children}
            <SpeedInsights />
            </ServiceContext>
            </ContextProvider>
      </body>
    </html>
  );
}
