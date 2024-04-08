import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/layout/navbar";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Qurie",
  description:
    "Qurie is your essential companion for swift response during emergencies. With real-time alerts, comprehensive guides, and community support features, Qurie empowers you to stay safe and informed when it matters most. Download now and take control of your safety.",
  keywords: [
    "Emergency response app",
    "Real-time alerts",
    "Disaster preparedness",
    "Community support",
    "First aid guide",
    "Weather forecast",
    "Emergency contacts",
    "Incident reporting",
    "Safety resources",
    "Community resilience",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
