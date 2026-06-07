"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    dataLayer?: IArguments[]
    gtag?: (command: "event", eventName: string) => void
  }
}

export function StoreMapViewEvent() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer?.push(arguments)
      }

    window.gtag("event", "store_map_view")
  }, [])

  return null
}
