import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = 'https://partner-api.21express.co.id/publics/tracking?resi_no=';

  constructor(private httpClient: HttpClient) {}

  private getFullUrl(resiNo: string): string {
    return this.baseUrl + resiNo;
  }

  public getTrackingData(resiNo: string): Observable<any> {
    const fullUrl = this.getFullUrl(resiNo);
    const headers = new HttpHeaders({
      'Sisco-Token': 'TOBGOAV5ULI/QGN8UQCKY9M6SNP+5TZZLN/JDFLXCUSKIDADBZ6MNQWLJPVE9JKY',
      'Api-Key': 'X*kLJ=GDcA1q'
    });

    return this.httpClient.get(fullUrl, { headers: headers });
  }
}
