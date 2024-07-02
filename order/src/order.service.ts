import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { randomUUID } from 'crypto';
import * as CircuitBreaker from 'opossum';

@Injectable()
export class OrderService {
  private httpClient: AxiosInstance;
  private breaker: CircuitBreaker<any, { data: any }>;

  constructor() {
    this.httpClient = axios.create({ baseURL: 'http://localhost:4000' });
    const requester = (data: any) => this.httpClient.post('/payments', data);
    this.breaker = new CircuitBreaker(requester, {
      timeout: 1000,
      errorThresholdPercentage: 50,
      resetTimeout: 3000,
    });
  }
  async execute() {
    const order = { id: randomUUID(), status: 'pending', amount: 1000 };
    const { data: payment } = await this.breaker.fire(order);
    const breakerState = this.breaker.toJSON();
    console.log(breakerState);
    return { ...order, payment };
  }
}
