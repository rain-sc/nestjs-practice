import { MoModule } from './mo.module';
import { DemoController } from './demo.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [MoModule, UserModule],
  controllers: [DemoController, AppController],
  providers: [AppService],
})
export class AppModule {}
