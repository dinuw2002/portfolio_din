export const runtime = 'nodejs';

import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';
import {prompt} from './botPrompt';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const formattedMessages: any[] = messages.map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      content: m.content,
    }));

    const result = await streamText({
      
      model: google('gemini-3.1-flash-lite-preview'), 
      messages: formattedMessages as any,
      system: prompt,
    });

    return result.toTextStreamResponse();
    
  } catch (error: any) {
    console.error("2026 API ERROR:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}