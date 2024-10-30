import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  apiaEndPint: string = "/api/HospitalAppointment/"

  createNew(obj:any): Observable<any> {
    return this.http.post(this.apiaEndPint + "AddNewAppointment", obj)
  }

  getAllAppointment(): Observable<any> {
    return this.http.get(this.apiaEndPint + "GetAllAppointments")
  }

  getAllTodaysAppointment(): Observable<any> {
    return this.http.get(this.apiaEndPint + "GetTodaysAppointments")
  }
}
