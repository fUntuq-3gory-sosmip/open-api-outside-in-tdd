import { Controller, Get, Param } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
    constructor(private chatService: ChatService) {}

    @Get('/ask')
  getChat(@Param() prompt: string) {
    return this.chatService.getChat(prompt);
  }
}
