import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              FlyerAI
            </span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: January 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                By accessing and using FlyerAI, you accept and agree to be bound by the terms and provision of this
                agreement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Use License</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Permission is granted to temporarily use FlyerAI for personal and commercial purposes. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Creating fliers and marketing materials</li>
                <li>Using AI-generated content in your designs</li>
                <li>Downloading and printing your creations</li>
                <li>Using designs for commercial purposes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Accounts</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                When you create an account with us, you must provide accurate and complete information. You are
                responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintaining the security of your account</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us of any unauthorized use</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>For paid services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payments are processed securely through Stripe</li>
                <li>Subscriptions renew automatically unless cancelled</li>
                <li>Refunds are available within 30 days of purchase</li>
                <li>Prices may change with 30 days notice</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prohibited Uses</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>You may not use FlyerAI:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>For any unlawful purpose or to solicit unlawful acts</li>
                <li>To create content that is harmful, offensive, or discriminatory</li>
                <li>To violate any international, federal, provincial, or state regulations or laws</li>
                <li>To transmit malicious code or compromise system security</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>You retain ownership of designs you create. However:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>FlyerAI retains rights to the platform and templates</li>
                <li>AI-generated content is provided under commercial license</li>
                <li>You grant us permission to use your designs for promotional purposes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Questions about the Terms of Service should be sent to us at:</p>
              <p className="mt-2">
                <strong>Email:</strong> legal@flyerai.com
                <br />
                <strong>Address:</strong> Nairobi, Kenya
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
