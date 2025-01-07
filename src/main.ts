import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
