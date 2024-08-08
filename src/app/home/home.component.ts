import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/Project";
import {NavServiceService} from "../service/nav-service.service";
import {Observable} from "rxjs";
import {Activity} from "../../models/Activity";
import {Task} from "../../models/Task";
import {TasksDetails} from "../../models/TasksDetails";
import {json} from "express";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public projects!: Observable<Project[]>;
  public activities!: Observable<Activity[]>;
  public tasks!: Observable<Task[]>;
  public tasksDetail!: Observable<TasksDetails>;
  private currentPage:number = 0;
  private size:number = 5;

  constructor(private navService: NavServiceService) {
    console.log(this.tasksDetail);
  }
  ngOnInit(): void {
    this.projects = this.navService.getProject();
    this.activities = this.navService.getActivities();
    this.tasks = this.navService.getTasks();
    this.tasksDetail = this.navService.getTaskPages(this.currentPage, this.size);
  }

  goToPage(page: number){
    this.currentPage = page;
    this.tasksDetail = this.navService.getTaskPages(this.currentPage, this.size);
  }
}
