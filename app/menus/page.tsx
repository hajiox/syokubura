import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "お品書き",
  description:
    "会津食のブランド館のメニュー一覧。会津三大ラーメン（喜多方・山塩・味噌）、会津ソースカツ丼、会津カレーライス、季節限定メニューなど豊富なラインナップ。価格は全て税込表示。テイクアウトも承ります。",
  openGraph: {
    title: "お品書き | 会津食のブランド館",
    description:
      "会津三大ラーメンやソースカツ丼、カレーなど会津グルメの豊富なメニューをご紹介。リーズナブルな価格で本格的な会津の味をお楽しみください。",
  },
}

export default function MenusPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-stone-800 mb-4">お品書き</h1>
            <p className="text-lg text-stone-600">
              提供しているメニューの一部をご紹介いたします。価格は全て税込価格です。
            </p>
          </div>

          {/* 会津三大ラーメン */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">会津三大ラーメン</h2>
            <p className="text-center text-stone-600 mb-8">
              会津の三大ラーメン 喜多方醤油ラーメン、北塩原会津山塩ラーメン、西会津味噌ラーメン
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src="/images/kitakata-ramen.jpeg" alt="喜多方醤油ラーメン" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">喜多方醤油ラーメン</h3>
                  <p className="text-amber-700 font-bold text-lg">¥780</p>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src="/images/yamashio-ramen.jpeg" alt="会津山塩ラーメン" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">会津山塩ラーメン</h3>
                  <p className="text-amber-700 font-bold text-lg">¥880</p>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src="/images/nishi-aizu-miso.jpeg" alt="西会津味噌ラーメン" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">西会津味噌ラーメン</h3>
                  <p className="text-amber-700 font-bold text-lg">¥880</p>
                </CardContent>
              </Card>
            </div>

            {/* チャーシューメン */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/shoyu-chashu-men.jpeg"
                      alt="喜多方チャーシューメン"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">喜多方チャーシューメン</h3>
                  <p className="text-amber-700 font-bold text-lg">¥1,030</p>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/shio-chashu-men.jpeg"
                      alt="会津山塩チャーシューメン"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">会津山塩チャーシューメン</h3>
                  <p className="text-amber-700 font-bold text-lg">¥1,130</p>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/miso-chashu-men.jpeg"
                      alt="西会津味噌チャーシューメン"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">西会津味噌チャーシューメン</h3>
                  <p className="text-amber-700 font-bold text-lg">¥1,130</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 会津ソースカツ丼 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">会津ソースカツ丼</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/sauce-katsudon-set.jpeg"
                      alt="会津ソースカツ丼&味噌汁セット"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">会津ソースカツ丼&味噌汁セット</h3>
                  <p className="text-amber-700 font-bold text-lg">¥1,000</p>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-stone-200 flex items-center justify-center">
                    <span className="text-stone-500">タルタルソースカツ丼画像</span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">タルタルソースカツ丼&味噌汁セット</h3>
                  <p className="text-amber-700 font-bold text-lg">¥1,100</p>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/special-katsudon.jpeg"
                      alt="特盛ソースカツ丼&味噌汁セット"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">特盛ソースカツ丼&味噌汁セット</h3>
                  <p className="text-amber-700 font-bold text-lg">¥1,450</p>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/takeout-katsudon.jpeg"
                      alt="お持ち帰り用ソースカツ丼"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">お持ち帰り用ソースカツ丼</h3>
                  <p className="text-amber-700 font-bold text-lg">¥800</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 会津カレーライス */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">会津カレーライス</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-stone-200 flex items-center justify-center">
                    <span className="text-stone-500">会津カレーライス画像</span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">会津カレーライス</h3>
                  <p className="text-amber-700 font-bold text-lg">¥750</p>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-stone-200 flex items-center justify-center">
                    <span className="text-stone-500">チーズカレーライス画像</span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">チーズカレーライス</h3>
                  <p className="text-amber-700 font-bold text-lg">¥850</p>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/hamburg-curry.jpeg"
                      alt="ハンバーグカレーライス"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">ハンバーグカレーライス</h3>
                  <p className="text-amber-700 font-bold text-lg">¥950</p>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src="/images/katsu-curry.jpeg" alt="カツカレーライス" fill className="object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">カツカレーライス</h3>
                  <p className="text-amber-700 font-bold text-lg">¥1,100</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 季節限定メニュー */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">季節限定メニュー</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src="/images/karaage-teishoku.jpeg" alt="デカ盛り唐揚げ定食" fill className="object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">デカ盛り唐揚げ定食</h3>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/motsu-itame-teishoku.jpeg"
                      alt="デカ盛りモツ炒め定食"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">デカ盛りモツ炒め定食</h3>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src="/images/hiyashi-chuka.jpeg" alt="会津山塩冷やし中華" fill className="object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">会津山塩冷やし中華</h3>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src="/images/cold-kitakata.jpeg" alt="冷たい喜多方ラーメン" fill className="object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">冷たい喜多方ラーメン</h3>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src="/images/aspara-tanmen-menu.jpeg" alt="アスパラタンメン" fill className="object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">アスパラタンメン</h3>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/peanut-tantanmen.jpeg"
                      alt="会津ピーナッツ担々麺"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">会津ピーナッツ担々麺</h3>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
