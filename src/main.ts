import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
// import { Request, Response, NextFunction } from 'express';
import * as cors from 'cors';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
// const whiteList = ['/list'];

// function MiddleWareAll(req: Request, res: Response, next: NextFunction) {
// console.log(req.originalUrl);
// if (whiteList.includes(req.originalUrl)) {
// 白名单
// next();
// } else {
// res.send('你沒有權限');
// }
// }
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, 'images'));
  app.use(cors());
  // app.enableCors();
  // app.use(MiddleWareAll);
  app.use(
    session({
      secret: 'rain',
      rolling: true,
      name: 'captcha.sid',
      cookie: {
        maxAge: null,
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
