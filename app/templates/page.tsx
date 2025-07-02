import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Palette, Search, Filter, Star } from "lucide-react"
import Link from "next/link"

const categories = [
  "All",
  "Sales & Promotions",
  "Events",
  "Restaurant",
  "Beauty & Spa",
  "Fitness",
  "Real Estate",
  "Education",
  "Technology",
  "Fashion",
]

const templates = [
  {
    id: 1,
    title: "Summer Sale Flier",
    category: "Sales & Promotions",
    image: "/placeholder.svg?height=300&width=200",
    popular: true,
    description: "Perfect for seasonal sales and promotions",
  },
  {
    id: 2,
    title: "Restaurant Grand Opening",
    category: "Restaurant",
    image: "/placeholder.svg?height=300&width=200",
    popular: false,
    description: "Announce your restaurant's grand opening",
  },
  {
    id: 3,
    title: "Fitness Class Promotion",
    category: "Fitness",
    image: "/placeholder.svg?height=300&width=200",
    popular: true,
    description: "Promote your fitness classes and memberships",
  },
  {
    id: 4,
    title: "Beauty Salon Services",
    category: "Beauty & Spa",
    image: "/placeholder.svg?height=300&width=200",
    popular: false,
    description: "Showcase your beauty and spa services",
  },
  {
    id: 5,
    title: "Tech Conference",
    category: "Events",
    image: "/placeholder.svg?height=300&width=200",
    popular: true,
    description: "Professional event announcement template",
  },
  {
    id: 6,
    title: "Real Estate Listing",
    category: "Real Estate",
    image: "/placeholder.svg?height=300&width=200",
    popular: false,
    description: "Showcase properties with style",
  },
]

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
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
            <Link href="/templates" className="text-purple-600 font-medium">
              Templates
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-purple-600 transition-colors">
              Pricing
            </Link>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Template</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our collection of professionally designed templates. Each template is optimized for conversions and
            ready to customize with AI.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input placeholder="Search templates..." className="pl-10" />
          </div>
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "secondary"}
              className={`cursor-pointer px-4 py-2 ${
                category === "All" ? "bg-purple-600 hover:bg-purple-700" : "hover:bg-gray-200"
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  {template.popular && (
                    <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-t-lg flex items-center justify-center">
                    <Link href={`/editor?template=${template.id}`}>
                      <Button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-purple-600 hover:bg-gray-100">
                        Use Template
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{template.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {template.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Templates
          </Button>
        </div>
      </div>
    </div>
  )
}
