import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export const metadata: Metadata = {
  title: "当店について",
  description:
    "会津食のブランド館について。会津の食の案内人として、会津三大ラーメンやソースカツ丼、カレーなどをリーズナブルに提供。総合プロデューサー佐藤正彦氏による本格的な会津グルメをお楽しみください。",
  openGraph: {
    title: "当店について | 会津食のブランド館",
    description:
      "会津の食の案内人として、本格的な会津グルメをリーズナブルに提供する会津食のブランド館の想いとこだわりをご紹介。",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-stone-800 mb-4">当店について</h1>
            <p className="text-lg text-stone-600">会津食のブランド館の想いとこだわり</p>
          </div>

          {/* 会津の食の案内人 */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-stone-800 mb-6">会津の食の案内人</h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-6">
                  会津盆地の中央『会津のへそ』と呼ばれる会津若松市、湯川村、会津坂下町3市町村の交わる場所に建つ『道の駅あいづ湯川・会津坂下』の中に当館はあります。
                </p>
                <p className="text-stone-600 text-lg leading-relaxed mb-6">
                  会津の名物料理をリーズナブルに、お手軽に召しあがれる会津の食の玄関口としてラーメン、ソースカツ丼、カレーなどを用意しお客様をお待ちしております。
                </p>
                <p className="text-stone-600 text-lg leading-relaxed mb-6">
                  是非、当館で美味しいと思ったものがあれば会津の各店にも足を運んでみて下さい。きっと新たな『美味しい』に出会える事でしょう。
                </p>
                <p className="text-stone-600 text-lg leading-relaxed font-semibold">
                  当館はそんな『会津の食の案内人』になりたいと考えています。
                </p>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/images/restaurant-exterior.jpeg"
                  alt="道の駅あいづ湯川・会津坂下の外観"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* 快適な環境づくり */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden rounded-lg order-2 lg:order-1">
                <Image
                  src="/images/restaurant-interior.jpeg"
                  alt="店内の様子 - 高い天井と開放的な空間"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-stone-800 mb-6">快適で清潔な環境づくり</h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-6">
                  当館は建物の特性上非常に天井が高く、開放的で空気の流動性も良い造りとなっております。
                </p>
                <p className="text-stone-600 text-lg leading-relaxed mb-6">
                  お客様に安心してお食事をお楽しみいただけるよう、清潔で快適な環境づくりに努めております。テーブルや設備の定期的な清掃・消毒を徹底し、スタッフ一同、常にお客様の健康と安全を第一に考えたサービスを心がけております。
                </p>
                <p className="text-stone-600 text-lg leading-relaxed">
                  皆様がゆっくりとお食事を楽しめるよう、従業員一同精一杯のおもてなしをさせていただきますので、何卒よろしくお願い申し上げます。
                </p>
              </div>
            </div>
          </section>

          {/* 総合プロデュース */}
          <section className="mb-16">
            <Card className="border-stone-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">総合プロデュース</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <div className="relative overflow-hidden rounded-lg mb-6">
                      <Image
                        src="/images/producer-sato.jpeg"
                        alt="佐藤正彦氏"
                        width={300}
                        height={300}
                        className="w-full h-auto grayscale"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-stone-800 mb-2">佐藤 正彦</h3>
                      <p className="text-stone-600">1971年会津生まれ</p>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="space-y-6">
                      <p className="text-stone-600 text-lg leading-relaxed">
                        食の専門家として西会津味噌ラーメン（西会津町）、会津カレー焼きそば（会津若松市）、西会津ミネラル野菜（西会津町）、金山赤カボチャ（金山町）、磐梯天授トマト（磐梯町）、ひゃくぶんのいち桃（桑折町）などのブランディング及び商品開発に係わる。
                      </p>

                      <p className="text-stone-600 text-lg leading-relaxed">
                        西会津味噌ラーメンでは調理師としてグルメグランプリ『第2回福島うまいもんNO1決定戦』に出場し優勝。
                      </p>

                      <p className="text-stone-600 text-lg leading-relaxed">
                        その他、郷土料理居酒屋、野菜カフェ、地元食材弁当店、食品加工施設などをプロデュースし会津食をけん引。
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
