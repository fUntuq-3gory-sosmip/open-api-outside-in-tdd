import { Injectable } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';

@Injectable()
export class ChatService {
    constructor(private gateway: ChatGateway){}

    async getChat(prompt: string) {
        return await this.gateway.getChat(prompt);
    }
}
