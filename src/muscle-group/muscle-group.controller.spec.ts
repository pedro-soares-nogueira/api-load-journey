import { Test, TestingModule } from '@nestjs/testing';
import { MuscleGroupController } from './muscle-group.controller';
import { MuscleGroupService } from './muscle-group.service';

describe('MuscleGroupController', () => {
  let controller: MuscleGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MuscleGroupController],
      providers: [MuscleGroupService],
    }).compile();

    controller = module.get<MuscleGroupController>(MuscleGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
