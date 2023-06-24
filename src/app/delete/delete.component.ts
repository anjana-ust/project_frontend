import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  // constructor(private service:EventService ,private router:Router ){}
  // id: number = 0;
  // deleteEventById():void{
  //   this.service.deleteEventById(this.id).subscribe(
  //     (response) => {
  //       console.log('student deleted successfully');
  //     },
  //     (error) => {
  //       console.log('Error :', error);
  //     }
  //   );
      
  //   }

}
