import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export const metadata: Metadata = {
  title: "アクセス",
  description:
    "会津食のブランド館へのアクセス方法。道の駅あいづ湯川・会津坂下内フードコート。福島県河沼郡会津坂下町大字片門字太子堂丁73-1。営業時間10:00-16:00。お車、電車、バスでのアクセス方法をご案内。",
  openGraph: {
    title: "アクセス | 会津食のブランド館",
    description:
      "道の駅あいづ湯川・会津坂下内の会津食のブランド館へのアクセス方法をご案内。お車、電車、バスでお越しいただけます。",
  },
}

export default function AccessPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* 左側：ロゴ */}
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/images/aizu-brand-logo-new.png"
                  alt="会津食のブランド館"
                  width={500}
                  height={150}
                  className="w-auto h-40"
                />
              </div>

              {/* 右側：店舗情報 */}
              <div className="text-center lg:text-left">
                <div className="mb-8">
                  <h1 className="text-2xl font-bold text-stone-800 mb-2">道の駅あいづ湯川・会津坂下内フードコート</h1>
                  <h2 className="text-3xl font-bold text-stone-800">会津食のブランド館</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-stone-800 mb-4">住所・営業時間</h3>

                    <div className="space-y-3 text-stone-600">
                      <p className="text-lg">
                        <span className="font-medium">〒969-3555</span>
                      </p>
                      <p className="text-lg">福島県河沼郡会津坂下町大字片門字太子堂丁73-1</p>

                      <div className="pt-4">
                        <p className="text-lg font-medium text-stone-800">10:00 - 16:00</p>
                        <p className="text-base text-stone-500">ラストオーダー 15:30</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* アクセス方法 */}
            <div className="mt-16 pt-12 border-t border-stone-200">
              <h3 className="text-2xl font-bold text-stone-800 mb-8 text-center">アクセス方法</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h4 className="font-semibold text-lg text-stone-800 mb-3">お車でお越しの場合</h4>
                  <p className="text-stone-600">磐越自動車道会津坂下ICより約5分</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-lg text-stone-800 mb-3">電車でお越しの場合</h4>
                  <p className="text-stone-600">JR会津坂下駅よりタクシーで約10分</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-lg text-stone-800 mb-3">バスでお越しの場合</h4>
                  <p className="text-stone-600">会津バス「道の駅あいづ」バス停下車すぐ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
