import type { NextRequest } from "next/server"

// Simple in-memory user store (replace with database in production)
const users = new Map()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, password } = body

    console.log("Sign up attempt:", { name, email }) // Debug log

    if (!name || !email || !password) {
      return Response.json({ error: "All fields are required" }, { status: 400 })
    }

    if (users.has(email.toLowerCase())) {
      return Response.json({ error: "User already exists with this email" }, { status: 409 })
    }

    // Create new user
    const user = {
      id: Date.now().toString(),
      name,
      email: email.toLowerCase(),
      password, // In production, hash this password
      plan: "free",
      createdAt: new Date().toISOString(),
    }

    users.set(email.toLowerCase(), user)

    console.log("User created:", { id: user.id, email: user.email }) // Debug log

    return Response.json({
      success: true,
      message: "Account created successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        plan: user.plan,
      },
    })
  } catch (error) {
    console.error("Sign up error:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
