export async function POST(request: Request) {
  try {
    const { prompt, style = "modern", colors = "vibrant" } = await request.json()

    if (!prompt) {
      return Response.json({ error: "Prompt is required" }, { status: 400 })
    }

    // Enhanced prompt for better flier-appropriate images
    const enhancedPrompt = `${prompt}, ${style} style, ${colors} colors, professional marketing material, high quality, suitable for business flier, clean composition, eye-catching design`

    // Use OpenAI DALL-E instead of Fal AI for now
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt: enhancedPrompt,
        n: 1,
        size: "1024x1792", // Portrait format good for fliers
        quality: "standard",
        response_format: "url",
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`)
    }

    const data = await response.json()

    return Response.json({
      imageUrl: data.data[0].url,
      prompt: enhancedPrompt,
    })
  } catch (error) {
    console.error("Error generating image:", error)
    return Response.json({ error: "Failed to generate image" }, { status: 500 })
  }
}
