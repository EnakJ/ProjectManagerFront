import {Component, OnInit} from '@angular/core';
import {NavServiceService} from "../service/nav-service.service";
import {Project} from "../../models/Project";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  constructor() {
  }
  ngOnInit(): void {
  }

}
