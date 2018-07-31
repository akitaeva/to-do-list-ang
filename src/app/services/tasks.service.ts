import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class TasksService {

  constructor(private myHttp: Http) { }
  
  
  //get all tasks
  getTasks(){
    return this.myHttp.get('http://localhost:3000/api/all-tasks')
    .map((responseThingy)=> responseThingy.json())
  }
  
   //create a task
  addNewTask(theWholeTaskObject){
    theWholeTaskObject.completed = false;
      return this.myHttp.post('http://localhost:3000/api/all-tasks',theWholeTaskObject)
      .map((res)=>res.json());
  }

  //task details by Id
  getOneTask(theIdOfTheTask){
    return this.myHttp.get('http://localhost:3000/api/all-tasks/' + theIdOfTheTask)
    .map((responseThingy)=> responseThingy.json())

  }
  
  //Edit Task by Id
   editTask(theWholeTaskObject){
    return this.myHttp.post('http://localhost:3000/api/all-tasks/' + theWholeTaskObject._id + '/submitEdit',theWholeTaskObject)
    .map((res)=>res.json());
  }
  
  //DeleteTask
   deleteTask(taskId){
    return this.myHttp.post('http://localhost:3000/api/all-tasks/' + taskId + '/delete', taskId)
    .map((res)=>res.json());
  }

  }

