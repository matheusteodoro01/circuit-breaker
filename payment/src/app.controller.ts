import { Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('/payments')
export class AppController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  payments() {
    return this.paymentService.execute();
  }
}
