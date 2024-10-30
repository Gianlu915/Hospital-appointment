import { Component } from '@angular/core';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';
import { Appointment } from '../../models/appointment.model';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrl: './new-appointment.component.css'
})
export class NewAppointmentComponent {

  appointmentObj: Appointment = {
    name: '',
    mobileNo: '',
    city: '',
    age: 0,
    gender: '',
    appointmentDate: '',
    appointmentTime: '',
    isFirstVisit: true,
    narration: ''
  };

  constructor(private master: MasterService){}

  onSaveAppointment() {
    this.master.createNew(this.appointmentObj).subscribe((res:any)=>{
      if(res.result){
        alert("Appointment done");
      }
    },error => {
      alert("API Error/ Check Form");
    })
  }
}
