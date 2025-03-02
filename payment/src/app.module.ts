import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PaymentService } from './payment.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PaymentService],
})
export class AppModule {}
