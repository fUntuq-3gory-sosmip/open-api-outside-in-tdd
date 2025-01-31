import { Test, TestingModule } from '@nestjs/testing';
import { ChatController } from './chat.controller';
import { vi } from 'vitest';
import { ChatService } from './chat.service';

describe('ChatController', () => {
  let controller: ChatController;
  let service: ChatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{provide: ChatService, useValue: {}}],
      controllers: [ChatController],
    }).compile();

    controller = module.get<ChatController>(ChatController);
    service = module.get<ChatService>(ChatService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it("should call the chat service", async () => {
    service.getChat = vi.fn().mockImplementationOnce(() => 'chat');

    const response = await controller.getChat('prompt');

    expect(service.getChat).toHaveBeenCalled();
    expect(response.message).toBe('chat');
  });
});
