import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { CalculatorService } from './calculator/calculator.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, CalculatorService],
})
export class AppModule {}
