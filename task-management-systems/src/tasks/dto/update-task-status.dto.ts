/* eslint-disable prettier/prettier */
import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';
export class UpdateTaskDto{
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
