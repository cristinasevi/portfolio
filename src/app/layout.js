import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "cristinasevi",
  description: "Web Designer & Developer based in Zaragoza, Spain. Specialized in creating engaging, accessible, and user-friendly digital experiences.",
  keywords: ["cristinasevi", "web design", "web development", "front-end developer", "UI/UX", "portfolio", "projects"],
  author: "Cristina Serrano Vicente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" translate="no" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {/* <Header/> */}
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
