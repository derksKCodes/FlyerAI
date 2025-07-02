import type { NextRequest } from "next/server"

// Simple in-memory user store (replace with database in production)
const users = new Map([
  ["demo@flyerai.com", { id: "1", name: "Demo User", email: "demo@flyerai.com", password: "demo123", plan: "free" }],
  [
    "john@example.com",
    { id: "2", name: "John Doe", email: "john@example.com", password: "password123", plan: "hustler" },
  ],
])

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    console.log("Sign in attempt:", { email, password }) // Debug log

    if (!email || !password) {
      return Response.json({ error: "Email and password are required" }, { status: 400 })
    }

    const user = users.get(email.toLowerCase())
    if (!user || user.password !== password) {
      return Response.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Create response with user data
    const response = Response.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        plan: user.plan,
      },
      message: "Sign in successful",
    })

    // Set authentication cookie
    response.headers.set("Set-Cookie", `auth-token=${user.id}; HttpOnly; Path=/; Max-Age=86400; SameSite=Lax`)

    return response
  } catch (error) {
    console.error("Sign in error:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
