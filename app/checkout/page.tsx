"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Palette, CreditCard, Lock, Check, ArrowLeft } from "lucide-react"
import Link from "next/link"

const plans = {
  hustler: { name: "Hustler Pro", price: 999, features: ["Unlimited designs", "Priority AI", "Premium templates"] },
  business: {
    name: "Business",
    price: 2499,
    features: ["Everything in Hustler Pro", "Team collaboration", "API access"],
  },
}

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const planType = (searchParams.get("plan") as keyof typeof plans) || "hustler"
  const plan = plans[planType]

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
    email: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value })
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      // Create payment intent
      const intentResponse = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planType, amount: plan.price }),
      })

      const { paymentIntentId } = await intentResponse.json()

      // Process payment
      const paymentResponse = await fetch("/api/process-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentIntentId, plan: planType }),
      })

      const result = await paymentResponse.json()

      if (result.success) {
        setPaymentSuccess(true)
      } else {
        alert(result.error || "Payment failed")
      }
    } catch (error) {
      alert("Payment processing failed. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-6">Welcome to {plan.name}! Your account has been upgraded.</p>
            <Link href="/dashboard">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">Go to Dashboard</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link href="/pricing">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Pricing
            </Button>
          </Link>
          <div className="flex items-center space-x-2 ml-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              FlyerAI
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Review your subscription details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">{plan.name}</h3>
                  <Badge className="mt-1">Monthly Subscription</Badge>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">KES {plan.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">per month</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Included features:</h4>
                <ul className="space-y-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total</span>
                  <span className="text-2xl font-bold">KES {plan.price.toLocaleString()}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Billed monthly • Cancel anytime</p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                Secure Payment
              </CardTitle>
              <CardDescription>Your payment information is encrypted and secure</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePayment} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={paymentData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Cardholder Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={paymentData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <div className="relative">
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={paymentData.cardNumber}
                      onChange={handleInputChange}
                      className="pr-10"
                      required
                    />
                    <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      type="text"
                      placeholder="MM/YY"
                      value={paymentData.expiryDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      type="text"
                      placeholder="123"
                      value={paymentData.cvv}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-lg py-3"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing Payment..." : `Subscribe for KES ${plan.price.toLocaleString()}/month`}
                  </Button>
                </div>

                <p className="text-xs text-gray-600 text-center">
                  By subscribing, you agree to our Terms of Service and Privacy Policy. You can cancel your subscription
                  at any time.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
