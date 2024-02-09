import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MuscleGroupModule } from './muscle-group/muscle-group.module';

@Module({
  imports: [MuscleGroupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
