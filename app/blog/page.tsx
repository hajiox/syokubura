import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-stone-800 mb-4">新着情報</h1>
            <p className="text-lg text-stone-600">最新のお知らせとイベント情報</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-stone-800 mb-6">準備中</h2>
            <p className="text-stone-600">新着情報は現在準備中です。しばらくお待ちください。</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
