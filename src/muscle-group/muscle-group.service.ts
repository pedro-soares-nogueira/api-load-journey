import { Injectable } from '@nestjs/common';
import { CreateMuscleGroupDto } from './dto/create-muscle-group.dto';
import { UpdateMuscleGroupDto } from './dto/update-muscle-group.dto';

import { Repository } from 'typeorm';
import { MuscleGroup } from './entities/muscle-group.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MuscleGroupService {
  constructor(
    @InjectRepository(MuscleGroup)
    private readonly muscleGroupsRepository: Repository<MuscleGroup>,
  ) {}

  create(createMuscleGroupDto: CreateMuscleGroupDto) {
    return this.muscleGroupsRepository.save(createMuscleGroupDto);
  }

  findAll() {
    return this.muscleGroupsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} muscleGroup`;
  }

  update(id: number, updateMuscleGroupDto: UpdateMuscleGroupDto) {
    return `This action updates a #${id} muscleGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} muscleGroup`;
  }
}
