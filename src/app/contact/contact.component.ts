import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
name: string="";
email: string="";
message: string="";
submitForm() {
  // Here, you can implement the logic to handle form submission
  // For this example, let's just log the form data
  console.log('Name:', this.name);
  console.log('Email:', this.email);
  console.log('Message:', this.message);

  // You can also clear the form fields after submission if desired
  this.name = '';
  this.email = '';
  this.message = '';
}

}
