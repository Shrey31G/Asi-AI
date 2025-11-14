import { authoptions } from "@/lib/auth";
import { google } from "@ai-sdk/google";
import { convertToModelMessages, generateText, streamText, UIMessage } from "ai";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {

    const session = await getServerSession(authoptions);
    if (!session) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
        model: google('gemma-3-27b-it'),
        system: 'You are a very strict professor',
        messages: convertToModelMessages(messages)
    })
    console.log("The AI replied:", result)
    return result.toUIMessageStreamResponse();
}