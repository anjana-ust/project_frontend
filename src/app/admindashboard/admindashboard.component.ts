import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { events } from '../Model/events';
import { user } from '../Model/user';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  


  constructor(private service:EventService ,private router:Router ){}
  ngOnInit(): void {
    this.task=this.getProducts();
    this.filteredTasks=[...this.task]
  }
  showAssignFormFlag: boolean = false;
  showTableViewFlag: boolean = false;
  taskName: string = '';
  deadline: string = '';
  filteredTasks: any[] = [];
  searchKeyword: string = '';
  userid:number=0
  tasks: events = new events();
  users:user=new user();
  task:events[]=[];
  id: number = 0;

  showAssignForm() {
    this.showAssignFormFlag = true;
    this.showTableViewFlag = false;
  }

  showTableView() {
    this.showAssignFormFlag = false;
    this.showTableViewFlag = true;
  }
  saveTask() {
    this.create();
  }
    
    
    // const newTask = {
    //   number: this.tasks.length + 1,
    //   name: this.taskName,
    //   deadline: this.deadline,
      
    //   comment: ''
    // };
    create(){
    this.service.saveTask(this.tasks).subscribe(
      (data)=>{
      console.log("saved",data);},
      (error)=>{
        console.log("There is an error",error)
      }
      );
      }

    // this.tasks.push(newTask);
    // this.taskName = '';
    // this.deadline = '';
getProducts():any{
this.service.getTasks().subscribe((event1)=>{
  this.task=event1;
});
}
deleteEventById(id:number){
  this.service.deleteEvent(id)
  .subscribe(data => {
      this.task = this.task.filter(item => item.id !== id);
      console.log('Event deleted successfully!');
  }
  , error => {
      console.log(error.error.message);
  }
  );}
  // applyFilter() {
  //   this.filteredTasks = this.tasks.filter(task =>
  //     task.taskName.toLowerCase().includes(this.searchKeyword.toLowerCase())
  //   );
  // }
applyFilter():void{
  if(this.searchKeyword){
    this.filteredTasks=this.task.filter(
      (tk:any)=>
      tk.task.toLowerCase().includes(this.searchKeyword.toLocaleLowerCase())
    );
  }else{
    this.task=[...this.task]
  }
  }
 
}
    
  
  
  

  

  