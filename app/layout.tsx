import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "../src/app/globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "Lobby Bot - Turn Gameplay Into Crypto Rewards",
  description: "Monetize gameplay effortlessly by turning players' sessions into crypto mining power",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} font-orbitron`}>
        {children}
      </body>
    </html>
  )
} 