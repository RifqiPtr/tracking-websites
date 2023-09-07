import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { TrackingService } from 'src/app/services/tracking.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl, form: FormGroupDirective | NgForm): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  trackingFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  isTrackingNumber: boolean = false;
  trackingNumber: string | null = '';
  sender: string = '';
  receiver: string = '';
  date: string = '';
  serviceType: string = '';
  status: string = '';
  detailActivity: any[] = [];
  isNotFound: boolean = false;
  errorMessage: string = '';
  errorMessageDetail: string = '';

  constructor(
    private trackingServices: TrackingService
  ){}

  sendData() {
    if (this.trackingFormControl.valid) {
      this.trackingNumber = this.trackingFormControl.value;
      const trackingNumber = this.trackingNumber; 
      if (trackingNumber != null) {
        this.trackingServices.fetchTrackingData(trackingNumber.toString()).subscribe( result=>{
          this.isTrackingNumber = true;
          this.isNotFound = false;
          const statusCode = result.express21.status.status_code;
          if (statusCode == 200) {
            this.sender = result.express21.results.shipment_detail.consignee_name;
            this.receiver = result.express21.results.shipment_detail.customer_name;
            this.date = result.express21.results.shipment_detail.dateprocess;
            this.serviceType = result.express21.results.shipment_detail.service_type;
            this.status = result.express21.results.shipment_detail.status;
            this.detailActivity = result.express21.results.tracking_status_detail;
          } else {
            console.log(result.express21.status.error_message);
          }
        },
        error => {
          this.isNotFound = true;
          this.errorMessage = error.error.express21.status.message;
          this.errorMessageDetail = error.error.express21.status.error_message;
          console.log(error.error.express21.status);
        });;
      } else {
        throw new Error("Check Your Tracking Number Once Again, It's Probably Incorrect!");
        return null;
      }
    }
  }
}
