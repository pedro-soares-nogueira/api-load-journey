import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MuscleGroupModule } from './muscle-group/muscle-group.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MuscleGroup } from './muscle-group/entities/muscle-group.entity';

@Module({
  imports: [
    MuscleGroupModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://pedro:pedro@api-load-journey-db.uj6tl0a.mongodb.net/?retryWrites=true&w=majority', // process.env.DATABASE_URL,
      entities: [MuscleGroup],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
