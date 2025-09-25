import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "CloudMate - A weather app",
    description:
        "A simple weather app that gives you real time forecasts and conditions for any city worldwide",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`antialiased ${inter.className}`}
                suppressHydrationWarning={true}
            >
                {children}
            </body>
        </html>
    );
}
