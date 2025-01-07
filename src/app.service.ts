import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '是我啦 哈哈!';
  }
  getXiexie(): string {
    return '谢谢啦 哈哈!';
  }
}
