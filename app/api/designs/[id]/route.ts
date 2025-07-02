export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    // In production, delete from database
    return Response.json({ success: true, message: "Design deleted successfully" })
  } catch (error) {
    return Response.json({ error: "Failed to delete design" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const { title, content } = await request.json()

    // In production, update in database
    const updatedDesign = {
      id: params.id,
      title,
      content,
      updatedAt: new Date().toISOString(),
    }

    return Response.json({ success: true, design: updatedDesign })
  } catch (error) {
    return Response.json({ error: "Failed to update design" }, { status: 500 })
  }
}
