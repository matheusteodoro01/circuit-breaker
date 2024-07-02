import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OrderService } from './order.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [OrderService],
})
export class AppModule {}
