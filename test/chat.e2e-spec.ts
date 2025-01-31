import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "src/app.module";
import request from 'supertest';

describe('chat should', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it.only('return hello world', async () => {
    const prompt = 'say "hello world!" without quotes';
    const reseponse = await request(app.getHttpServer()).get(
      `/chat/ask?prompt=${prompt}`, 
    );
    expect(reseponse.status).toBe(200);
    expect(reseponse.body).toBeDefined();
    expect(reseponse.body.message).toBe('hello world!');
  });
});
