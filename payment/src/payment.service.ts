import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
@Injectable()
export class PaymentService {
  execute() {
    return {
      id: randomUUID(),
      status: 'SUCCESS',
      amount: 1000,
    };
  }
}
