"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Palette, Download, Sparkles, ImageIcon, Type, Undo, Redo, Save, Share, Zap, Wand2, Camera } from "lucide-react"
import Link from "next/link"

export default function EditorPage() {
  const [isGeneratingText, setIsGeneratingText] = useState(false)
  const [isGeneratingImage, setIsGeneratingImage] = useState(false)
  const [businessType, setBusinessType] = useState("")
  const [promotion, setPromotion] = useState("")
  const [generatedText, setGeneratedText] = useState("")

  const handleGenerateText = async () => {
    if (!businessType || !promotion) return

    setIsGeneratingText(true)
    // Simulate AI text generation
    setTimeout(() => {
      setGeneratedText(`🔥 MEGA SALE ALERT! 🔥

Get ${promotion} at ${businessType}!

✨ Limited Time Only
✨ Don't Miss Out
✨ Call Now: +254 700 000 000

Visit us today and save big!`)
      setIsGeneratingText(false)
    }, 2000)
  }

  const handleGenerateImage = async () => {
    setIsGeneratingImage(true)
    // Simulate AI image generation
    setTimeout(() => {
      setIsGeneratingImage(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              FlyerAI
            </span>
          </Link>

          {/* Editor Tools */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Undo className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Redo className="w-4 h-4" />
            </Button>
            <div className="w-px h-6 bg-gray-300 mx-2" />
            <Button variant="ghost" size="sm">
              <Save className="w-4 h-4 mr-1" />
              Save
            </Button>
            <Button variant="ghost" size="sm">
              <Share className="w-4 h-4 mr-1" />
              Share
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
              <Download className="w-4 h-4 mr-1" />
              Download
            </Button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Left Sidebar - AI Tools */}
        <div className="w-80 bg-white border-r overflow-y-auto">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
              AI Assistant
            </h2>

            <Tabs defaultValue="text" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="text" className="flex items-center gap-1">
                  <Type className="w-4 h-4" />
                  Text
                </TabsTrigger>
                <TabsTrigger value="image" className="flex items-center gap-1">
                  <ImageIcon className="w-4 h-4" />
                  Image
                </TabsTrigger>
              </TabsList>

              <TabsContent value="text" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Generate Marketing Copy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Business Type</label>
                      <Input
                        placeholder="e.g., Restaurant, Salon, Gym"
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Promotion</label>
                      <Input
                        placeholder="e.g., 50% off, Buy 1 Get 1 Free"
                        value={promotion}
                        onChange={(e) => setPromotion(e.target.value)}
                      />
                    </div>
                    <Button
                      onClick={handleGenerateText}
                      disabled={isGeneratingText || !businessType || !promotion}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600"
                    >
                      {isGeneratingText ? (
                        <>
                          <Wand2 className="w-4 h-4 mr-2 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Zap className="w-4 h-4 mr-2" />
                          Generate Copy
                        </>
                      )}
                    </Button>

                    {generatedText && (
                      <div className="mt-4">
                        <label className="text-sm font-medium mb-1 block">Generated Text</label>
                        <Textarea
                          value={generatedText}
                          onChange={(e) => setGeneratedText(e.target.value)}
                          rows={8}
                          className="text-sm"
                        />
                        <Button size="sm" className="mt-2 w-full bg-transparent" variant="outline">
                          Add to Design
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="image" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Generate Custom Images</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Image Description</label>
                      <Textarea placeholder="Describe the image you want to create..." rows={3} />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Style</label>
                        <select className="w-full p-2 border rounded-md text-sm">
                          <option>Modern</option>
                          <option>Vintage</option>
                          <option>Minimalist</option>
                          <option>Bold</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Colors</label>
                        <select className="w-full p-2 border rounded-md text-sm">
                          <option>Vibrant</option>
                          <option>Pastel</option>
                          <option>Monochrome</option>
                          <option>Brand Colors</option>
                        </select>
                      </div>
                    </div>
                    <Button
                      onClick={handleGenerateImage}
                      disabled={isGeneratingImage}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600"
                    >
                      {isGeneratingImage ? (
                        <>
                          <Camera className="w-4 h-4 mr-2 animate-pulse" />
                          Creating Image...
                        </>
                      ) : (
                        <>
                          <ImageIcon className="w-4 h-4 mr-2" />
                          Generate Image
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Quick Templates */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold mb-3">Quick Start Templates</h3>
              <div className="grid grid-cols-2 gap-2">
                {["Sale", "Event", "Menu", "Service"].map((template) => (
                  <Button key={template} variant="outline" size="sm" className="text-xs bg-transparent">
                    {template}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Canvas Area */}
        <div className="flex-1 flex items-center justify-center bg-gray-100 p-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden" style={{ width: "400px", height: "600px" }}>
            {/* Canvas Preview */}
            <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Design Here</h2>
                <p className="text-gray-600 text-sm mb-4">
                  Use the AI tools on the left to generate content, then drag and drop elements to create your flier.
                </p>
                <Badge className="bg-purple-100 text-purple-700">Ready to Design</Badge>
              </div>

              {/* Sample elements that would be draggable */}
              <div className="absolute top-4 left-4 right-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center">
                  <h3 className="font-bold text-lg">MEGA SALE!</h3>
                  <p className="text-sm text-gray-600">Up to 50% Off Everything</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Properties */}
        <div className="w-64 bg-white border-l overflow-y-auto">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Properties</h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Background Color</label>
                <div className="flex space-x-2">
                  {["bg-purple-500", "bg-pink-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"].map((color) => (
                    <div
                      key={color}
                      className={`w-8 h-8 rounded-full ${color} cursor-pointer border-2 border-gray-200 hover:border-gray-400`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Font Size</label>
                <Input type="range" min="12" max="48" defaultValue="16" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Text Color</label>
                <Input type="color" defaultValue="#000000" />
              </div>

              <Button variant="outline" className="w-full bg-transparent">
                Reset to Default
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
