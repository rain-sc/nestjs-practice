import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
@Controller('get')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('xiexie')
  getXiexie(): string {
    return this.appService.getXiexie();
  }

  @Get('user')
  getUser(): string {
    return this.userService.findAll();
  }
}
