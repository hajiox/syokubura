"use client"

import { usePathname } from "next/navigation"
import Script from "next/script"
import { useEffect, useState } from "react"

// Google Analytics測定ID
const GA_MEASUREMENT_ID = "G-QF0C5C17LW"

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const [searchParams, setSearchParams] = useState("")

  useEffect(() => {
    // クライアントサイドでのみ検索パラメータを取得
    if (typeof window !== "undefined") {
      setSearchParams(window.location.search)
    }
  }, [pathname])

  useEffect(() => {
    if (pathname && window.gtag) {
      // ページビューの送信
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname + searchParams,
      })
    }
  }, [pathname, searchParams])

  return (
    <>
      {/* Google Analytics スクリプト */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname + window.location.search,
            });
          `,
        }}
      />
    </>
  )
}
