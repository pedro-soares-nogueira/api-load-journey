import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectId,
  ObjectIdColumn,
} from 'typeorm';

export type MuscleGroupProps = {
  id: string;
  name: string;
  created_at: Date;
};

@Entity('muscleGroups')
export class MuscleGroup {
  constructor(props: MuscleGroupProps) {
    Object.assign(this, props);
  }

  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;
}
