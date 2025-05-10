"use client"

import { useState } from "react"
import { sendInquiry } from "@/app/actions"

export default function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null)
  const [formErrors, setFormErrors] = useState<{
    name?: string
    company?: string
    email?: string
    details?: string
  }>({})

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormErrors({})

    // Basic validation
    const name = formData.get("name") as string
    const company = formData.get("company") as string
    const email = formData.get("email") as string
    const details = formData.get("details") as string

    const errors: {
      name?: string
      company?: string
      email?: string
      details?: string
    } = {}

    if (!name || name.trim() === "") {
      errors.name = "お名前を入力してください"
    }

    if (!company || company.trim() === "") {
      errors.company = "会社名を入力してください"
    }

    if (!email || email.trim() === "") {
      errors.email = "メールアドレスを入力してください"
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "有効なメールアドレスを入力してください"
    }

    if (!details || details.trim() === "") {
      errors.details = "詳細を入力してください"
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      setIsSubmitting(false)
      return
    }

    try {
      await sendInquiry(formData)
      setFormStatus("success")
      // Reset form
      const form = document.getElementById("inquiry-form") as HTMLFormElement
      form?.reset()
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 bg-primary/10 border-b border-primary/20">
        <p className="text-center text-dark-gray/100 mt-2">
          ご質問やご相談がございましたら、お気軽にお問い合わせください。
        </p>
      </div>

      {formStatus === "success" ? (
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-xl font-medium text-dark-gray mb-2">送信完了</h4>
          <p className="text-dark-gray/70 mb-6">
            お問い合わせありがとうございます。内容を確認の上、担当者より折り返しご連絡いたします。
          </p>
          <button
            onClick={() => setFormStatus(null)}
            className="px-6 py-2 bg-primary hover:bg-primary/80 text-dark-gray rounded-full transition-colors duration-300"
          >
            新しいお問い合わせ
          </button>
        </div>
      ) : (
        <form id="inquiry-form" action={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-dark-gray">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full px-4 py-2 border ${
                formErrors.name ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
              placeholder="山田 太郎"
              required
            />
            {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="block text-sm font-medium text-dark-gray">
              会社名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className={`w-full px-4 py-2 border ${
                formErrors.company ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
              placeholder="株式会社サンプル"
              required
            />
            {formErrors.company && <p className="text-red-500 text-sm">{formErrors.company}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-dark-gray">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-4 py-2 border ${
                formErrors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
              placeholder="example@example.com"
              required
            />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="details" className="block text-sm font-medium text-dark-gray">
              詳細 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="details"
              name="details"
              rows={5}
              className={`w-full px-4 py-2 border ${
                formErrors.details ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
              placeholder="お問い合わせ内容をご記入ください"
              required
            ></textarea>
            {formErrors.details && <p className="text-red-500 text-sm">{formErrors.details}</p>}
          </div>

          {formStatus === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600 text-sm">
                送信中にエラーが発生しました。しばらくしてからもう一度お試しください。
              </p>
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-primary hover:bg-primary/80 text-dark-gray rounded-md shadow-md hover:shadow-lg font-medium transition-all duration-300 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-dark-gray"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  処理中...
                </span>
              ) : (
                "送信"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
