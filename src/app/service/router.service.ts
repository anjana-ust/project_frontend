import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  
  constructor(private router:Router) { }

  tologin() {
    this.router.navigate(['/login']);
  }

  tosignup() {
    this.router.navigate(['/signup']);
  }
  touser() {
    this.router.navigate(['/assign']);
  }
  toadmin(){
    this.router.navigate(['/admin']);
  }
  tocontact(){
    this.router.navigate(['/contact']);
  }
  toabout(){

    this.router.navigate(['/contact']);
  }
}
