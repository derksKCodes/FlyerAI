import { fal } from "@fal-ai/serverless"

export async function POST(request: Request) {
  try {
    const { prompt, style = "modern", colors = "vibrant" } = await request.json()

    if (!prompt) {
      return Response.json({ error: "Prompt is required" }, { status: 400 })
    }

    // Enhanced prompt for better flier-appropriate images
    const enhancedPrompt = `${prompt}, ${style} style, ${colors} colors, professional marketing material, high quality, suitable for business flier, clean composition, eye-catching design`

    const result = await fal("fal-ai/flux/schnell", {
      input: {
        prompt: enhancedPrompt,
        image_size: "portrait_4_3",
        num_inference_steps: 4,
        enable_safety_checker: true,
      },
    })

    return Response.json({
      imageUrl: result.data.images[0].url,
      prompt: enhancedPrompt,
    })
  } catch (error) {
    console.error("Error generating image:", error)
    return Response.json({ error: "Failed to generate image" }, { status: 500 })
  }
}
