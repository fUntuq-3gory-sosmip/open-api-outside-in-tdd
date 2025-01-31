import { Controller, Get, Param, Query } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
    constructor(private chatService: ChatService) {}

  @Get('/ask')
  async getChat(@Query('prompt') prompt: string) {
    const completion = await this.chatService.getChat(prompt);
    return {message: completion};
  }
}
