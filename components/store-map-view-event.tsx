"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string) => void
  }
}

export function StoreMapViewEvent() {
  useEffect(() => {
    let attempts = 0

    const sendEvent = () => {
      if (window.gtag) {
        window.gtag("event", "store_map_view")
        return
      }

      attempts += 1
      if (attempts < 20) {
        window.setTimeout(sendEvent, 100)
      }
    }

    sendEvent()
  }, [])

  return null
}
