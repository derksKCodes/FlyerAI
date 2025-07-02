import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Palette, Search, MessageCircle, Mail, Phone } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "How do I create my first flier?",
    answer:
      "Simply click 'Start Creating' on the homepage, choose a template or start from scratch, use our AI tools to generate content, customize your design, and download when ready!",
  },
  {
    question: "What AI features are available?",
    answer:
      "FlyerAI offers AI-powered text generation for marketing copy, headlines, and CTAs, plus AI image generation to create custom visuals that match your brand and message.",
  },
  {
    question: "Can I use my designs commercially?",
    answer:
      "Yes! All designs created with FlyerAI come with a commercial license, allowing you to use them for your business, sell products, or promote services.",
  },
  {
    question: "What file formats can I download?",
    answer:
      "You can download your designs in high-quality PNG and PDF formats, perfect for both digital sharing and professional printing.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "We offer flexible pricing: pay per design (KES 50-100), monthly unlimited plans (KES 999), or business plans (KES 2,499) with team features.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "You can cancel your subscription at any time from your account settings. No questions asked, no cancellation fees.",
  },
  {
    question: "Do you offer printing services?",
    answer:
      "Yes! We partner with local printing services to offer high-quality printing and delivery. Pricing starts from KES 20 per print.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Currently, FlyerAI is a web-based platform optimized for all devices. A dedicated mobile app is coming soon!",
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
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
            <Link href="/pricing" className="text-gray-600 hover:text-purple-600 transition-colors">
              Pricing
            </Link>
            <Link href="/help" className="text-purple-600 font-medium">
              Help
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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Find answers to common questions, get support, or contact our team
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input placeholder="Search for help..." className="pl-10 pr-4 py-3 text-lg" />
          </div>
        </div>

        {/* Quick Help Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Learn the basics of creating your first flier</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/editor">
                <Button variant="outline" className="w-full bg-transparent">
                  View Guide
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-pink-600" />
              </div>
              <CardTitle>AI Features</CardTitle>
              <CardDescription>Discover how to use AI for text and images</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/editor">
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle>Billing & Plans</CardTitle>
              <CardDescription>Understand pricing and manage your subscription</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/pricing">
                <Button variant="outline" className="w-full bg-transparent">
                  View Details
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
          <p className="text-xl text-gray-600 mb-8">Our support team is here to help you succeed</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Live Chat
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent">
                <Mail className="w-5 h-5 mr-2" />
                Email Support
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">Average response time: 2 hours • Available 24/7</p>
        </div>
      </div>
    </div>
  )
}
