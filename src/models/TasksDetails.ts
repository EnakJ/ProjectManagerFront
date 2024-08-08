import {Task} from "./Task";

export interface TasksDetails{
  totalElements: number;
  totalPages: number;
  size: number;
  taskList: Task[];
}
