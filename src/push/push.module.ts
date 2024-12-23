import { Module } from '@nestjs/common';
import { PushController } from './push.controller';

@Module({
  imports: [],
  controllers: [PushController],
  providers: [],
})
export class PushModule {}
