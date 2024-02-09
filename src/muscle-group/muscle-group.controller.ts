import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MuscleGroupService } from './muscle-group.service';
import { CreateMuscleGroupDto } from './dto/create-muscle-group.dto';
import { UpdateMuscleGroupDto } from './dto/update-muscle-group.dto';

@Controller('muscle-group')
export class MuscleGroupController {
  constructor(private readonly muscleGroupService: MuscleGroupService) {}

  @Post()
  create(@Body() createMuscleGroupDto: CreateMuscleGroupDto) {
    return this.muscleGroupService.create(createMuscleGroupDto);
  }

  @Get()
  findAll() {
    return this.muscleGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.muscleGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMuscleGroupDto: UpdateMuscleGroupDto) {
    return this.muscleGroupService.update(+id, updateMuscleGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.muscleGroupService.remove(+id);
  }
}
