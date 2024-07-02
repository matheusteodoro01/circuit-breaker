import { Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('/orders')
export class AppController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async orders() {
    const order = await this.orderService.execute();
    return order;
  }
}
