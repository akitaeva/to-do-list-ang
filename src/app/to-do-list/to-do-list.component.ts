import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  tasks : Array<any> = [];
  newTask:any = {};
  showDiv: boolean = false;

  constructor(private toDoService: TasksService) { }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks(){
    this.toDoService.getTasks()
    .subscribe((res)=>{
      this.tasks = res.reverse();
    })
  }

  addOneTask(){
    this.toDoService.addNewTask(this.newTask)
    .subscribe((responsethingy)=>{
      this.newTask = {};
      this.getAllTasks();
      //console.log('yeah! you did it!')
    })
  }

  deleteOneTask(taskId){
    this.toDoService.deleteTask(taskId)
    .subscribe((responsethingy)=>{
      this.getAllTasks();
      //console.log('yeah! you did it!')
    })
    }
 
	editOneTask(taskId){
		this.deleteOneTask(taskId);
		this.addOneTask();
	  }


}
