"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    setIsSubmitting(true)
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-stone-800 mb-4">お問い合わせ</h1>
            <p className="text-lg text-stone-600">ご質問やご要望がございましたらお気軽にお問い合わせください</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* お問い合わせフォーム */}
            <div>
              <Card className="border-stone-200 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-stone-800 mb-6">メールでのお問い合わせ</h2>

                  <form
                    action="https://formspree.io/f/mnnvaqej"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <Label htmlFor="name" className="text-stone-700 font-medium">
                        お名前 <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="mt-2 border-stone-300 focus:border-amber-500 focus:ring-amber-500"
                        placeholder="お名前を入力してください"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-stone-700 font-medium">
                        メールアドレス <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-2 border-stone-300 focus:border-amber-500 focus:ring-amber-500"
                        placeholder="メールアドレスを入力してください"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-stone-700 font-medium">
                        お問い合わせ内容 <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="mt-2 border-stone-300 focus:border-amber-500 focus:ring-amber-500"
                        placeholder="お問い合わせ内容を入力してください"
                      />
                    </div>

                    {/* 隠しフィールド：件名を設定 */}
                    <input type="hidden" name="_subject" value="会津食のブランド館 - お問い合わせ" />

                    {/* 隠しフィールド：スパム対策 */}
                    <input type="hidden" name="_captcha" value="false" />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 text-lg font-medium disabled:opacity-50"
                    >
                      {isSubmitting ? "送信中..." : "送信する"}
                    </Button>
                  </form>

                  {/* Formspreeについての説明 */}
                  <div className="mt-8 pt-6 border-t border-stone-200">
                    <p className="text-stone-600 text-sm mb-3">
                      このフォームは安全なFormspreeサービスを使用してメールを送信します。
                    </p>
                    <p className="text-stone-600 text-sm">お問い合わせ内容は担当者に直接送信されます。</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 店舗情報と画像 */}
            <div className="space-y-8">
              {/* 店舗画像 */}
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/kitchen-staff.jpeg"
                  alt="厨房で働くスタッフの様子"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              {/* 連絡先情報 */}
              <Card className="border-stone-200 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-stone-800 mb-6">店舗情報</h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="text-amber-700 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg text-stone-800 mb-1">電話番号</h3>
                        <a href="tel:0242-23-4001" className="text-stone-600 hover:text-amber-700 transition-colors">
                          0242-23-4001
                        </a>
                        <p className="text-stone-500 text-sm mt-1">（本社）株式会社テクニカルスタッフ</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="text-amber-700 mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg text-stone-800 mb-1">所在地</h3>
                        <p className="text-stone-600">
                          道の駅あいづ 湯川・会津坂下
                          <br />
                          福島県河沼郡会津坂下町大字片門字太子堂丁73-1
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-stone-200">
                    <h3 className="font-semibold text-lg text-stone-800 mb-3">営業時間</h3>
                    <p className="text-stone-600">
                      10:00 - 16:00
                      <br />
                      <span className="text-stone-500 text-sm">ラストオーダー 15:30</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 注意事項 */}
          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-3">お問い合わせについて</h3>
            <ul className="text-amber-700 space-y-2 text-sm">
              <li>• お返事までに2-3営業日いただく場合がございます。</li>
              <li>• お急ぎの場合は、お電話でのお問い合わせをお願いいたします。</li>
              <li>• 営業時間外のお電話でのお問い合わせは、翌営業日の対応となります。</li>
              <li>• フォーム送信後、確認メールが届かない場合は迷惑メールフォルダをご確認ください。</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
