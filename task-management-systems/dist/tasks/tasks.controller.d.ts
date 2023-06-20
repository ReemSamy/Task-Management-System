import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskDto } from './dto/update-task-status.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTasks(FilterDto: GetTasksFilterDto): Task[];
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    CreateTask(createTaskDto: CreateTaskDto): Task;
    deleteTask(id: string): void;
    updateTaskStatus(id: string, updateTaskDto: UpdateTaskDto): Task;
}
