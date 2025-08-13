import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import GoogleAnalytics from "@/components/google-analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

const siteName = "会津食のブランド館"
const description =
  "会津若松、湯川村、会津坂下町の交わる道の駅あいづ内フードコート「会津食のブランド館」。喜多方ラーメン、会津山塩ラーメン、西会津味噌ラーメンの三大ラーメンやソースカツ丼、カレーなど会津グルメをリーズナブルに提供。テイクアウトも可能。"
const ogpTitle = "会津食のブランド館 - 会津の味覚をまるごと堪能！三大ラーメンと地元グルメ"
const ogpDescription =
  "道の駅あいづ湯川・会津坂下にある「会津食のブランド館」で、喜多方・山塩・味噌の会津三大ラーメンをはじめ、ソースカツ丼やカレーなど、会津の美味しいものを手軽にお楽しみください。"
// 本番環境のURLをここに入れる。ローカル開発時はngrokなどのURLか、Vercelのプレビュードメイン
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aizu-shokuno-brandkan.vercel.app" // 例: Vercelのデフォルトドメイン

export const metadata: Metadata = {
  title: {
    default: `${siteName}｜道の駅あいづ湯川・会津坂下で会津三大ラーメンを味わう`,
    template: `%s | ${siteName}`,
  },
  description: description,
  openGraph: {
    title: ogpTitle,
    description: ogpDescription,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/images/ogp-image.jpeg`, // 絶対パスで指定
        width: 1200,
        height: 630,
        alt: "会津三大ラーメン",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ogpTitle,
    description: ogpDescription,
    images: [`${siteUrl}/images/ogp-image.jpeg`], // 絶対パスで指定
  },
  alternates: {
    canonical: siteUrl,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Google Analytics */}
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
