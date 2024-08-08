import {Task} from "./Task";

export interface ActivityDetails{
  idActivity: number;
  activityIntitule: string;
  activityDesc: string;
  goal: string;
  activityStatut: string;
  activityState: string;
  deadline: Date;
  tasks: Task[];
}
