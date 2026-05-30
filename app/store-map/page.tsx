import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const googleMapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.30388931034!2d139.9208079!3d37.5007502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff5535cf0cdc5a7%3A0xc1e02afb913c2084!2z5Lya5rSl44OW44Op44Oz44OJ6aSoIEFpenUgQnJhbmQgSGFsbA!5e0!3m2!1sja!2sjp!4v1778143961829!5m2!1sja!2sjp"

const googleMapUrl = "https://www.google.com/maps/search/会津ブランド館/@37.5007502,139.9208079,15z"

export const metadata: Metadata = {
  title: "お店への地図",
  description:
    "会津食のブランド館への地図。道の駅あいづ湯川・会津坂下内フードコート、福島県河沼郡会津坂下町大字片門字太子堂丁73-1。",
  openGraph: {
    title: "お店への地図 | 会津食のブランド館",
    description: "会津食のブランド館への地図を表示します。",
  },
}

export default function StoreMapPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <main className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-10 lg:p-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">お店への地図</h1>
              <p className="text-stone-600">
                道の駅あいづ湯川・会津坂下内フードコート「会津食のブランド館」
              </p>
              <p className="text-stone-600 mt-2">福島県河沼郡会津坂下町大字片門字太子堂丁73-1</p>
            </div>

            <div className="overflow-hidden rounded-lg border border-stone-200 shadow-sm bg-stone-100">
              <iframe
                src={googleMapEmbedUrl}
                width="100%"
                height="520"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="会津食のブランド館 Google Map"
                className="block w-full"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link
                href={googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors duration-200"
              >
                Google Mapsで開く
              </Link>
              <Link
                href="/access"
                className="inline-block bg-stone-700 hover:bg-stone-800 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors duration-200"
              >
                アクセス情報を見る
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer showMapLink={false} />
    </div>
  )
}
