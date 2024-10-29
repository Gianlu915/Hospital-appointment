import { Component } from '@angular/core';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';
import { Appointment } from '../../models/appointment.model';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrl: './new-appointment.component.css'
})
export class NewAppointmentComponent {

  appointmentObj: Appointment = { // Inizializza appointmentObj con un oggetto che rispetta l'interfaccia Appointment
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
}
