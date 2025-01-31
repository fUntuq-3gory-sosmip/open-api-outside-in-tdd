import { Module } from '@nestjs/common';
import { ChatController } from './chat/chat.controller';
import { ChatService } from './chat/chat.service';
import { ChatGateway } from './chat/chat.gateway';

@Module({
  controllers: [ChatController],
  providers: [ChatService, ChatGateway]
})
export class ChatModule {}
