import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "会津三大ラーメン",
  description:
    "喜多方ラーメン、会津山塩ラーメン、西会津味噌ラーメンの会津三大ラーメンをご紹介。ラーメントライアングル地帯で育まれた伝統の味を会津食のブランド館で一度に味わえます。手作りチャーシューと厳選スープの本格的な味をお楽しみください。",
  openGraph: {
    title: "会津三大ラーメン | 会津食のブランド館",
    description:
      "喜多方・山塩・味噌の会津三大ラーメンが一度に味わえるのは当店だけ！伝統の味と手作りチャーシューをお楽しみください。",
  },
}

export default function SandaiPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">会津三大ラーメンとは</h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">それはラーメントライアングル</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6">ラーメントライアングル</h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                会津には喜多方ラーメンを始め、会津山塩ラーメン、西会津味噌ラーメンなど個性的で美味しいラーメンが揃っています。
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                特に会津の北部、喜多方を中心として三角形に構成されるエリアが会津三大ラーメンが楽しめる「ラーメントライアングル」地帯となっています。
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/ramen-triangle-map.jpeg"
                alt="会津・喜多方ラーメントライアングル地図"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Soup Section */}
      <section className="py-12 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-lg order-2 lg:order-1">
              <Image
                src="/images/soup-ingredients.jpeg"
                alt="鶏ガラ、豚骨などのスープ素材"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-stone-800 mb-6">厳選素材を生かしたスープ</h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                当店では鶏ガラ、豚骨、丸鶏、チャーシューをじっくりと煮込んだ濁りの少ない上湯スープを作成しております。
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                このベーススープに喜多方ラーメンには煮干し、山塩ラーメンには生姜・ネギ、味噌ラーメンにはにんにくを加えそれぞれのラーメンに適したスープを調合、是非深い味わいの三大ラーメンスープをお楽しみ下さい。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chashu Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6">チャーシューへの拘り</h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                当店手作りの豚バラ巻きチャーシューが美味しいと評判となり2020年より通販サイト
                Amazonにてチャーシューの販売をさせて頂いております。
              </p>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                販売開始三ヶ月でAmazonの売上ベストセラー1位を記録。現在も「Amazonで最も売れているチャーシュー」として多くのリピーター様にご利用を頂いています。
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                徹底した材料の品質管理と温度管理が生み出す柔らかくジューシーなチャーシューを是非ご賞味下さい。
              </p>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg">
              <Image src="/images/chashu-plate.jpeg" alt="手作り豚バラ巻きチャーシュー" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Three Ramen Types */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">会津三大ラーメン</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 喜多方ラーメン */}
            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                  <Image
                    src="/images/kitakata-ramen.jpeg"
                    alt="喜多方ラーメン - 醤油ベースの澄んだスープ"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mb-4">
                  <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                    醤油
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4 text-center">喜多方ラーメン</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  言わずと知れた全国三大ラーメンの一つ。多加水中太縮れ麺を使用。創業100年の老舗醤油屋「星醸造」の醤油は喜多方定番の味。あっさりだけど深いコクのある旨い醤油ラーメンをお楽しみ下さい。
                </p>
              </CardContent>
            </Card>

            {/* 会津山塩ラーメン */}
            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                  <Image
                    src="/images/yamashio-ramen.jpeg"
                    alt="会津山塩ラーメン - 塩ベースの透明なスープ"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    塩
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4 text-center">会津山塩ラーメン</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  裏磐梯北塩原村で採れる希少な会津山塩を使った逸品。グリーンタフと呼ばれる太古の地層から湧き出る温泉水から作られる塩はミネラルが豊富でマイルドな味わい。海の塩とは違う山塩独特の旨味を是非ご堪能下さい。
                </p>
              </CardContent>
            </Card>

            {/* 西会津味噌ラーメン */}
            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                  <Image
                    src="/images/nishi-aizu-miso.jpeg"
                    alt="西会津味噌ラーメン - 野菜たっぷりの味噌ラーメン"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mb-4">
                  <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                    味噌
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4 text-center">西会津味噌ラーメン</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  ミネラル野菜の里として知られる西会津町。ここで生まれた味噌ラーメンはズバリ「野菜を最高に美味しく食べられるラーメン」会津の濃厚な味噌と野菜の旨み甘みが最高に美味しいスープを生み出しました。グルメグランプリ「福島うまいものNO1決定戦」にて第2回、第3回大会を連覇した間違いのない味を是非お楽しみ下さい。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
              会津三大ラーメンが1店で味わえるのは当店だけ！
            </h2>
            <p className="text-xl text-stone-600">会津自慢の三大ラーメンを是非ご賞味下さい！</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
