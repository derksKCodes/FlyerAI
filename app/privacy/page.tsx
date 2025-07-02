import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: January 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We collect information you provide directly to us, such as when you create an account, use our services,
                or contact us for support.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information (name, email, password)</li>
                <li>Design content and preferences</li>
                <li>Payment information (processed securely by Stripe)</li>
                <li>Usage data and analytics</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our services</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send important updates and notifications</li>
                <li>Provide customer support</li>
                <li>Analyze usage patterns to improve user experience</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information</li>
                <li>Secure payment processing through Stripe</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and data</li>
                <li>Export your designs and data</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-2">
                <strong>Email:</strong> privacy@flyerai.com
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
