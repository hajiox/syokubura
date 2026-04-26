"use client"

import { useEffect } from "react"

const GA_MEASUREMENT_ID = "G-QF0C5C17LW"

export default function GoogleAnalytics() {
  useEffect(() => {
    // v0プレビュー環境ではスキップ
    if (typeof window === "undefined") return
    if (window.location.hostname.includes("vusercontent.net") || window.location.hostname.includes("v0.dev")) return

    // 既に読み込み済みの場合はスキップ
    if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) return

    // Google Analytics スクリプトを動的に追加
    const script = document.createElement("script")
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    script.async = true
    document.head.appendChild(script)

    // gtag初期化
    script.onload = () => {
      window.dataLayer = window.dataLayer || []
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args)
      }
      window.gtag = gtag
      gtag("js", new Date())
      gtag("config", GA_MEASUREMENT_ID)
    }
  }, [])

  return null
}

// TypeScript用の型定義
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}
