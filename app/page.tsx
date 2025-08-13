import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { HeroCarousel } from "@/components/hero-carousel"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* About Section - 元のヒーローセクションのテキストを移動 */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
              会津がまるごと味わえる
              <br />
              <span className="text-amber-800">フードコート</span>
            </h2>
            <p className="text-xl text-stone-600 mb-4 max-w-3xl mx-auto">
              会津三大ラーメン・会津ソースカツ丼・会津トマトカレー
              <br />
              そう、ここは会津食がまるごと味わえるフードコート
            </p>
          </div>
        </div>
      </section>

      {/* Ramen Banner Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/sandai" className="block">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/new-ramen-banner.jpg"
                alt="会津三大ラーメン - 喜多方ラーメン、会津山塩ラーメン、西会津味噌ラーメン"
                width={1200}
                height={300}
                className="w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-blue-50 p-6 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">美</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">美味しい</h3>
              <p className="text-blue-700 text-sm">
                会津の料理を知り尽くした職人が手作り。フードコートでよくある出来合いもの温め直して提供するものとは味が違います。
              </p>
            </div>

            <div className="text-center bg-green-50 p-6 rounded-lg border border-green-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">安</span>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">reasonable</h3>
              <p className="text-green-700 text-sm">
                食のブランド館の料理は非常にリーズナブル。自社食品加工施設にて大量仕入れ、大量製造する事で極限までコストを下げています。
              </p>
            </div>

            <div className="text-center bg-orange-50 p-6 rounded-lg border border-orange-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">早</span>
              </div>
              <h3 className="text-lg font-semibold text-orange-800 mb-2">早い</h3>
              <p className="text-orange-700 text-sm">
                フードコートの利点を生かし、スピーディーに提供する事を心がけています。お客様を可能な限りお待たせしないようスタッフ一同努力して参ります。
              </p>
            </div>

            <div className="text-center bg-purple-50 p-6 rounded-lg border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">持</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-800 mb-2">テイクアウト</h3>
              <p className="text-purple-700 text-sm">
                ソースカツ丼、カレーライスなどはテイクアウトも賜っております。美味しいお裾分けにも是非ご活用下さい。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Menu Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">季節メニュー</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-lg p-6 shadow-lg border border-green-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    期間限定
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-4">アスパラタンメン好評販売中！</h3>
                  <p className="text-lg text-stone-600 mb-4">５月下旬頃まで</p>
                  <p className="text-stone-600">
                    会津アスパラ+会津山塩の最高の組み合わせ！美味しい春の味覚をお楽しみください。
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/images/aspara-tanmen-new.png"
                      alt="アスパラタンメン - 新鮮なアスパラガスがトッピングされたタンメン"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">メニューギャラリー</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative h-56 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Image
                src="/images/katsudon-set.jpeg"
                alt="ソースカツ丼セット"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative h-56 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Image
                src="/images/takeout-katsudon.jpeg"
                alt="テイクアウトソースカツ丼"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative h-56 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Image
                src="/images/ramen-mini-katsudon.jpeg"
                alt="ラーメンとミニカツ丼のセット"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative h-56 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Image
                src="/images/tantanmen.jpeg"
                alt="担々麺"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative h-56 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Image
                src="/images/curry-hamburg.jpeg"
                alt="カレーとハンバーグ"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative h-56 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Image
                src="/images/stir-fry.jpeg"
                alt="野菜炒め"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative h-56 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Image
                src="/images/karaage-set.jpeg"
                alt="唐揚げ定食"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative h-56 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Image
                src="/images/stir-fry-set.jpeg"
                alt="野菜炒め定食"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative h-56 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Image
                src="/images/aspara-tanmen-close.jpeg"
                alt="アスパラタンメン"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
