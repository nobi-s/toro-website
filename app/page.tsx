import { Inter } from "next/font/google"
import ServiceIcon from "@/components/service-icon"
import InquiryForm from "@/components/inquiry-form"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center ${inter.className} bg-light-gray text-dark-gray`}>
      {/* Hero Section */}
      <section className="w-full bg-primary/20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-start space-y-6 max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-dark-gray">
              <span className="text-primary/100 drop-shadow-sm">TORO</span> inc.
            </h1>
            <p className="text-2xl md:text-3xl text-dark-gray/80 font-light">表現者の力を最大化する</p>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
            <p className="text-lg text-dark-gray/70">
              クリエイティブとテクノロジーの融合で、新しい表現の可能性を広げます。
            </p>
          </div>
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute -top-6 -left-6 w-full h-full bg-primary/30 rounded-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-lg"></div>
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl bg-white">
              <img src="/hero-image.png" alt="TORO abstract visual" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About/Services Section */}
      <section className="w-full py-24 bg-gradient-to-b from-light-gray to-primary/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-0.5 w-8 bg-primary"></div>
              <h2 className="text-3xl md:text-4xl font-semibold mx-4 text-center">What we do</h2>
              <div className="h-0.5 w-8 bg-primary"></div>
            </div>
            <p className="text-lg text-dark-gray/70 max-w-2xl text-center">
              クリエイティブとテクノロジーの力で、ビジネスの可能性を広げます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service Card 1 */}
            <div className="group relative overflow-hidden rounded-lg border border-primary/20 bg-gradient-to-br from-primary/70 to-primary/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center mr-4 group-hover:bg-primary/30 transition-all duration-300">
                    <ServiceIcon type="product" className="w-6 h-6 text-dark-gray" />
                  </div>
                  <h3 className="text-xl font-semibold">プロダクト開発</h3>
                </div>
                <p className="text-dark-gray/80">
                  新規のプロダクトを開発中です。ユーザー体験を重視した革新的なソリューションを提供します。
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Service Card 2 */}
            <div className="group relative overflow-hidden rounded-lg border border-primary/20 bg-gradient-to-br from-primary/70 to-primary/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center mr-4 group-hover:bg-primary/30 transition-all duration-300">
                    <ServiceIcon type="consulting" className="w-6 h-6 text-dark-gray" />
                  </div>
                  <h3 className="text-xl font-semibold">ITコンサルティング</h3>
                </div>
                <p className="text-dark-gray/80">
                  ビジネス課題に対する最適なIT戦略を提案します。専門知識と経験を活かし、お客様のビジョンを実現します。
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Service Card 3 */}
            <div className="group relative overflow-hidden rounded-lg border border-primary/20 bg-gradient-to-br from-primary/70 to-primary/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center mr-4 group-hover:bg-primary/30 transition-all duration-300">
                    <ServiceIcon type="development" className="w-6 h-6 text-dark-gray" />
                  </div>
                  <h3 className="text-xl font-semibold">受託開発</h3>
                </div>
                <p className="text-dark-gray/80">
                  お客様のニーズに合わせたカスタムソフトウェア開発を行います。高品質なコードと効率的な開発プロセスを提供します。
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Service Card 4 */}
            <div className="group relative overflow-hidden rounded-lg border border-primary/20 bg-gradient-to-br from-primary/70 to-primary/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center mr-4 group-hover:bg-primary/30 transition-all duration-300">
                    <ServiceIcon type="innovation" className="w-6 h-6 text-dark-gray" />
                  </div>
                  <h3 className="text-xl font-semibold">テクノロジー革新</h3>
                </div>
                <p className="text-dark-gray/80">
                  最新技術を活用した革新的なソリューションを提供します。表現者の力を最大化するための技術基盤を構築します。
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-0.5 w-8 bg-primary"></div>
              <h2 className="text-3xl md:text-4xl font-semibold mx-4 text-center">会社情報</h2>
              <div className="h-0.5 w-8 bg-primary"></div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-primary/30 rounded-br-lg"></div>

            {/* Table container */}
            <div className="relative bg-light-gray/50 rounded-lg shadow-sm border border-primary/10 overflow-hidden">
              {/* Company name row */}
              <div className="group hover:bg-primary/5 transition-colors duration-300">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6 items-center">
                  <div className="md:col-span-1 flex justify-start md:justify-end">
                    <div className="text-lg font-medium text-dark-gray/90 bg-primary/90 px-4 py-2 rounded-full">
                      会社名
                    </div>
                  </div>
                  <div className="md:col-span-4 text-lg pl-0 md:pl-4 pt-2 md:pt-0">合同会社TORO (トロ)</div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full"></div>
              </div>

              {/* Business content row */}
              <div className="group hover:bg-primary/5 transition-colors duration-300">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6 items-center">
                  <div className="md:col-span-1 flex justify-start md:justify-end">
                    <div className="text-lg font-medium text-dark-gray/90 bg-primary/90 px-4 py-2 rounded-full">
                      設立年月
                    </div>
                  </div>
                  <div className="md:col-span-4 text-lg pl-0 md:pl-4 pt-2 md:pt-0">2024年6月</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-gradient-to-br from-primary/5 to-primary/20 py-16">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <div className="w-full flex justify-center mb-12">
            <div className="flex items-center justify-center">
              <div className="h-0.5 w-8 bg-primary"></div>
              <h2 className="text-3xl md:text-4xl font-semibold mx-4 text-center">お問い合わせ</h2>
              <div className="h-0.5 w-8 bg-primary"></div>
            </div>
          </div>

          <InquiryForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-dark-gray/95 text-light-gray">
        <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col items-center text-center">
          <div className="mb-6">
            <span className="text-2xl font-bold text-primary">TORO</span>
            <span className="text-2xl font-bold"> inc.</span>
          </div>
          <a href="#" className="text-sm mb-2 hover:underline text-primary/80">
            Privacy Policy
          </a>
          <p className="text-sm text-light-gray/70">&copy; {new Date().getFullYear()} TORO inc. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
