import Navigation from "@/components/navigation/navbar"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Aavaran Test",
  description: "Aavaran Test Website using Next.js App Router"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {/* <App/> */}
        {children}
      </body>
    </html>
  )
}
