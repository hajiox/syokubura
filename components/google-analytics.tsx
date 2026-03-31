"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

// Google Analytics測定ID
const GA_MEASUREMENT_ID = "G-QF0C5C17LW"

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // クライアントサイドでのみスクリプトを読み込む
    if (typeof window === "undefined" || isLoaded) return

    // Google Analytics スクリプトを動的に読み込む
    const script = document.createElement("script")
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    script.async = true
    script.onload = () => {
      // @ts-ignore
      window.dataLayer = window.dataLayer || []
      function gtag(...args: unknown[]) {
        // @ts-ignore
        window.dataLayer.push(args)
      }
      // @ts-ignore
      window.gtag = gtag
      gtag("js", new Date())
      gtag("config", GA_MEASUREMENT_ID, {
        page_path: window.location.pathname + window.location.search,
      })
      setIsLoaded(true)
    }
    document.head.appendChild(script)

    return () => {
      // クリーンアップ（通常は不要だが念のため）
    }
  }, [isLoaded])

  useEffect(() => {
    // ページ遷移時のページビュー送信
    if (pathname && typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname + window.location.search,
      })
    }
  }, [pathname])

  // このコンポーネントはスクリプトを動的に読み込むため、何もレンダリングしない
  return null
}
