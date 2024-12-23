import { Module } from '@nestjs/common';
import { PushModule } from './push/push.module';

require('dotenv').config();

@Module({
  imports: [PushModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
