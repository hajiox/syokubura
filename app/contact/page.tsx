import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "会津食のブランド館へのお問い合わせはこちら。ご質問やご要望がございましたらお気軽にお問い合わせください。メールフォームまたはお電話でお受けしております。",
  openGraph: {
    title: "お問い合わせ | 会津食のブランド館",
    description: "会津食のブランド館へのお問い合わせフォーム。ご質問やご要望をお気軽にお寄せください。",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
