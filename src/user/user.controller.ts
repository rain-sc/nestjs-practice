import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Query,
  Headers,
  HttpCode,
  Response,
  Session,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptcha from 'svg-captcha';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('code')
  createCode(@Request() req, @Response() res, @Session() session) {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 40,
      background: '#cc9966',
    });
    session.code = captcha.text;
    res.type('image/svg+xml');
    res.send(captcha.data);
  }

  @Post('create')
  createUser(@Body() body, @Session() session) {
    if (session.code === body?.code) {
      return {
        code: 200,
        message: '驗證馬正確',
      };
    }
    return {
      code: 500,
      message: '驗證馬不正確',
    };
  }
  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
  // @Get()
  // findAll(@Request() req) {
  //   console.log('req', req.query);

  //   return {
  //     code: 200,
  //     message: 'success',
  //   };
  // }
  // @Get()
  // findAll(@Query() query) {
  //   console.log('query', query);

  //   return {
  //     code: 200,
  //     message: 'success',
  //   };
  // }

  // @Post()
  // create(@Request() req) {
  //   console.log('req', req.body);
  //   return {
  //     code: 200,
  //     message: 'success',
  //   };
  // }
  // @Post()
  // create(@Body('age') body) {
  //   console.log('body', body);
  //   return {
  //     code: 200,
  //     message: 'success',
  //   };
  // }

  // @Get(':id')
  // @HttpCode(500)
  // findId(@Param() params, @Headers() headers) {
  //   console.log('params', params);
  //   console.log('headers', headers);

  //   return {
  //     code: 200,
  //   };
  // }
}
