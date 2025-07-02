import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Palette, Zap, Crown, Sparkles } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Pay Per Design",
    price: "KES 50-100",
    description: "Perfect for occasional use",
    features: [
      "1 High-quality flier design",
      "AI text generation",
      "AI image creation",
      "500+ templates access",
      "HD download (PNG/PDF)",
      "Commercial license",
    ],
    popular: false,
    cta: "Create Design",
    priceDetail: "Pay only when you create",
  },
  {
    name: "Hustler Pro",
    price: "KES 999",
    description: "Best for active entrepreneurs",
    features: [
      "Unlimited designs",
      "Priority AI generation",
      "Premium templates",
      "Brand kit storage",
      "Bulk export options",
      "Priority support",
      "Remove watermarks",
      "Advanced editing tools",
    ],
    popular: true,
    cta: "Start Free Trial",
    priceDetail: "per month",
  },
  {
    name: "Business",
    price: "KES 2,499",
    description: "For growing businesses",
    features: [
      "Everything in Hustler Pro",
      "Team collaboration (5 users)",
      "Brand guidelines enforcement",
      "Custom templates creation",
      "API access",
      "White-label options",
      "Dedicated account manager",
      "Print service integration",
    ],
    popular: false,
    cta: "Contact Sales",
    priceDetail: "per month",
  },
]

const addOns = [
  {
    name: "Professional Printing",
    price: "From KES 20",
    description: "High-quality printing and delivery service",
    icon: "🖨️",
  },
  {
    name: "Rush Delivery",
    price: "KES 500",
    description: "Get your printed fliers within 24 hours",
    icon: "⚡",
  },
  {
    name: "Design Consultation",
    price: "KES 1,500",
    description: "30-minute session with design expert",
    icon: "👨‍🎨",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              FlyerAI
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/templates" className="text-gray-600 hover:text-purple-600 transition-colors">
              Templates
            </Link>
            <Link href="/pricing" className="text-purple-600 font-medium">
              Pricing
            </Link>
            <Link href="/auth/signin">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
            <Sparkles className="w-4 h-4 mr-1" />
            Simple & Transparent Pricing
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're just starting out or running a growing business, we have the perfect plan to help you create
            stunning fliers that convert.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-2 border-purple-500 shadow-xl scale-105" : "border hover:border-purple-200"} transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1">
                    <Crown className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">/{plan.priceDetail}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.name === "Pay Per Design" ? (
                  <Link href="/editor">
                    <Button className="w-full bg-gray-900 hover:bg-gray-800" size="lg">
                      {plan.cta}
                    </Button>
                  </Link>
                ) : plan.name === "Business" ? (
                  <Link href="/contact">
                    <Button className="w-full bg-gray-900 hover:bg-gray-800" size="lg">
                      {plan.cta}
                    </Button>
                  </Link>
                ) : (
                  <Link href={`/checkout?plan=${plan.name.toLowerCase().replace(" ", "")}`}>
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Add-on Services</h2>
            <p className="text-gray-600">Enhance your experience with our premium services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{addon.icon}</div>
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <CardDescription>{addon.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600 mb-4">{addon.price}</div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Add to Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="font-semibold mb-2">How does pay-per-design work?</h3>
              <p className="text-gray-600">
                You only pay when you download a completed design. No monthly commitments required.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold mb-2">Can I cancel my subscription anytime?</h3>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time. No questions asked.</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee if you're not satisfied with our service.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold mb-2">What file formats do you support?</h3>
              <p className="text-gray-600">
                We provide high-quality PNG and PDF downloads suitable for both digital and print use.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your First Flier?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of hustlers already growing their business with FlyerAI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Zap className="w-5 h-5 mr-2" />
                Start Creating Free
              </Button>
            </Link>
            <Link href="/templates">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
              >
                View Templates
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
