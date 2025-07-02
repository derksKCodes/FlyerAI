import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: Request) {
  try {
    const { businessType, promotion, style = "promotional" } = await request.json()

    if (!businessType || !promotion) {
      return Response.json({ error: "Business type and promotion are required" }, { status: 400 })
    }

    const systemPrompt = `You are a marketing copywriter specializing in creating compelling flier copy for small businesses and hustlers. Create engaging, conversion-focused text that drives action.`

    const userPrompt = `Create compelling flier copy for a ${businessType} offering ${promotion}. 
    
    Style: ${style}
    
    Include:
    - Attention-grabbing headline
    - Key benefits/features
    - Strong call-to-action
    - Contact information placeholder
    - Use emojis strategically
    - Keep it concise but impactful
    - Make it suitable for Kenyan market`

    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      prompt: userPrompt,
      maxTokens: 300,
    })

    return Response.json({ text })
  } catch (error) {
    console.error("Error generating text:", error)
    return Response.json({ error: "Failed to generate text" }, { status: 500 })
  }
}
