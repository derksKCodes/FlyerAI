export async function POST(request: Request) {
  try {
    const { plan, amount } = await request.json()

    // Simulate Stripe payment intent creation
    const paymentIntent = {
      id: `pi_${Date.now()}`,
      client_secret: `pi_${Date.now()}_secret_${Math.random().toString(36).substr(2, 9)}`,
      amount: amount * 100, // Convert to cents
      currency: "kes",
      status: "requires_payment_method",
    }

    return Response.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    })
  } catch (error) {
    console.error("Payment intent creation error:", error)
    return Response.json({ error: "Failed to create payment intent" }, { status: 500 })
  }
}
