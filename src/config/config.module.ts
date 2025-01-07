import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: 'config',
      useValue: { baseUrl: '/api' },
    },
  ],
  exports: [
    {
      provide: 'config',
      useValue: { baseUrl: '/api' },
    },
  ],
})
export class ConfigModule {}
