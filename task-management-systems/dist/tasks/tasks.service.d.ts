import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
export declare class TasksService {
    private tasks;
    getTasksWithFilters(FilterDto: GetTasksFilterDto): Task[];
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    CreateTask(createTaskDto: CreateTaskDto): Task;
    deleteTask(id: string): void;
    updateStatusOfTask(id: string, status: TaskStatus): Task;
}
