import { Injectable } from "@nestjs/common";
import OpenAI from "openai";


@Injectable()
export class ChatGateway {
    private OPENAI_API_KEY = "";
    private openaiClient: OpenAI
    constructor() {
        this.openaiClient = new OpenAI({
            apiKey: this.OPENAI_API_KEY,
        });
    }
    public async getChat(prompt: string) {
       const chatCompletion = await this.openaiClient.chat.completions.create({
           messages: [{ role: 'user', content: prompt }],
           model: 'gpt-4o',
       }); 

       return chatCompletion?.choices[0]?.message?.content;
    }
}