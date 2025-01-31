import { Injectable } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';

@Injectable()
export class ChatService {
    constructor(private gateway: ChatGateway){}

    getChat(prompt: string) {
        return this.gateway.getChat(prompt);
    }
}
