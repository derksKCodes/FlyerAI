"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Palette, Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setSubmitted(true)
    setIsSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
            <p className="text-gray-600 mb-6">Thank you for contacting us. We'll get back to you within 24 hours.</p>
            <Link href="/">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">Back to Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

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
            <Link href="/help" className="text-gray-600 hover:text-purple-600 transition-colors">
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
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about FlyerAI? We'd love to hear from you. Send us a message and we'll respond as soon as
            possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-purple-600" />
                  Email Us
                </CardTitle>
                <CardDescription>Send us an email anytime</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium">support@flyerai.com</p>
                <p className="text-sm text-gray-600 mt-1">We typically respond within 2 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-purple-600" />
                  Call Us
                </CardTitle>
                <CardDescription>Speak with our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium">+254 700 000 000</p>
                <p className="text-sm text-gray-600 mt-1">Mon-Fri, 9AM-6PM EAT</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                  Visit Us
                </CardTitle>
                <CardDescription>Our office location</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Nairobi, Kenya</p>
                <p className="text-sm text-gray-600 mt-1">Westlands Business District</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-purple-600" />
                  Live Chat
                </CardTitle>
                <CardDescription>Get instant help</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600"
                  onClick={() => {
                    alert(
                      "Live chat feature coming soon! For now, please use the contact form or email us at support@flyerai.com",
                    )
                  }}
                >
                  Start Chat
                </Button>
                <p className="text-sm text-gray-600 mt-2">Available 24/7</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your question or feedback..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-lg py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to our Privacy Policy.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Looking for Quick Answers?</h2>
          <p className="text-gray-600 mb-6">Check out our FAQ section for instant answers to common questions</p>
          <Link href="/help">
            <Button variant="outline" size="lg" className="bg-transparent">
              Visit Help Center
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
