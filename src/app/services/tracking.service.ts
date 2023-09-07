import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(
    private httpService: HttpService
  ) { }

  fetchTrackingData(trackingNumber: string) {
    return this.httpService.getTrackingData(trackingNumber);
  }
}
