import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata for Code Leaf landing page
// export const metadata: Metadata = {
//   title: "Code Leaf - Custom Software & Web Development from Kochi",
//   description:
//     "Custom software, web apps, and automation solutions for schools, businesses, and startups. Serving global clients with affordable full-stack development.",
//   generator: "v0.app",
//   openGraph: {
//     title: "Code Leaf - Custom Software & Web Development",
//     description: "Tailored software solutions built in Kochi for the world.",
//     type: "website",
//   },
//   icons: {
//     icon: [
//       {
//         url: "/icon-light-32x32.png",
//         media: "(prefers-color-scheme: light)",
//       },
//       {
//         url: "/icon-dark-32x32.png",
//         media: "(prefers-color-scheme: dark)",
//       },
//       {
//         url: "/icon.svg",
//         type: "image/svg+xml",
//       },
//     ],
//     apple: "/apple-icon.png",
//   },
// }
export const metadata: Metadata = {
  title: "CodeLeaf — Custom Software & Web Development Company in Kochi",
  description:
    "Custom software, web apps, and automation solutions for schools, businesses, and startups. Serving global clients with affordable full-stack development.",
  generator: "v0.app",
  openGraph: {
    title: "Code Leaf - Custom Software & Web Development",
    description: "Tailored software solutions built in Kochi for the world.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.png", type: "image/png" }, // optional, included in pack
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
