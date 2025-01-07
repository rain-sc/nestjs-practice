/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { DemoService } from './demo.service';

@Module({
  imports: [],
  controllers: [],
  providers: [DemoService],
})
export class MoModule {}
