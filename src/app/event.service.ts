import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { events } from './Model/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  updateTask(editedTask: events) {
    throw new Error('Method not implemented.');
  }
  

  //private apiUrl = 'http://localhost:9095/api/events';
  constructor(private http: HttpClient) { }

  saveTask(task: any): Observable<any> {
    return this.http.post<events>("http://localhost:9000/api/events/assign",task);
  }

  getTasks(): Observable<any[]> {
    return this.http.get<events[]>("http://localhost:9000/api/events/view");
  }
  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`http://localhost:9000/api/v2/fetch/${id}`);
  }
  deleteEvent(id: number): Observable<events> {
    return this.http.delete<events>(`http://localhost:9000/api/events/delete/${id}`);
  }
  updateEvent(student: events): Observable<Object> {
    return this.http.put(`http://localhost:9000/api/events/update/${student.id}`, events);
  }
  
}
