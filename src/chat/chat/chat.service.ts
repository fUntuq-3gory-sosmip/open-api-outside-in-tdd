import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
    getChat(prompt: string) {
        throw new Error('Method not implemented.');
    }
}
