import { Test, TestingModule } from '@nestjs/testing';
import { ChatService } from './chat.service';
import { vi } from 'vitest';
import { ChatGateway } from './chat.gateway';

describe('ChatService', () => {
  let service: ChatService;
  let gateway: ChatGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatService, ChatGateway],
    }).compile();

    service = module.get<ChatService>(ChatService);
    gateway = module.get<ChatGateway>(ChatGateway);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call chat gateway', () => {
    gateway.getChat = vi.fn().mockImplementationOnce(() => 'chat');
    const prompt = "Test prompt";

    const response = service.getChat(prompt);

    expect(gateway.getChat).toHaveBeenCalledWith('Test prompt');
    expect(response).toBe('chat');
  });
});
