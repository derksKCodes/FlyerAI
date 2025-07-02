export async function GET() {
  // Mock designs data
  const designs = [
    {
      id: "1",
      title: "Summer Sale Flier",
      thumbnail: "/placeholder.svg?height=200&width=150",
      createdAt: "2024-01-15",
      status: "completed",
      downloads: 5,
    },
    {
      id: "2",
      title: "Restaurant Menu",
      thumbnail: "/placeholder.svg?height=200&width=150",
      createdAt: "2024-01-14",
      status: "draft",
      downloads: 0,
    },
  ]

  return Response.json({ designs })
}

export async function POST(request: Request) {
  try {
    const { title, content } = await request.json()

    const newDesign = {
      id: Date.now().toString(),
      title: title || "Untitled Design",
      thumbnail: "/placeholder.svg?height=200&width=150",
      createdAt: new Date().toISOString().split("T")[0],
      status: "draft",
      downloads: 0,
      content: content || "",
    }

    return Response.json({ success: true, design: newDesign })
  } catch (error) {
    return Response.json({ error: "Failed to save design" }, { status: 500 })
  }
}
