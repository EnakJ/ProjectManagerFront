import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../../models/Project";
import {Activity} from "../../models/Activity";
import {Task} from "../../models/Task";
import {TasksDetails} from "../../models/TasksDetails";

@Injectable({
  providedIn: 'root'
})
export class NavServiceService implements OnInit{
  public urlapi: string = "http://localhost:8085/";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getProject():Observable<Project[]>{
    return this.http.get<Project[]>(this.urlapi+'projects');
  }

  getActivities():Observable<Activity[]>{
    return this.http.get<Activity[]>(this.urlapi+'activities');
  }

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.urlapi+'tasks');
  }

  getTaskPages(page: number, size: number):Observable<TasksDetails>{
    return this.http.get<TasksDetails>(this.urlapi+`tasksPage?page=${page}&size=${size}`);
  }
}
