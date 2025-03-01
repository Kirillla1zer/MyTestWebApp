import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Device } from '../model/device.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DevicesListServiceService {

  constructor(private http:HttpClient) { }
  getData(): Observable<Device[]> 
  {
    return this.http.get<Device[]>('http://localhost:5109')
  }
  deleteOneOfData(deviceid:string,deviceStartTimeSession:String,deveiceEndTimeSession:String) {
  

    return this.http.delete<void>(`http://localhost:5109/${deviceid}/${deviceStartTimeSession}/${deveiceEndTimeSession}`); 
  }
}
/*const params = new HttpParams()
.set('id', deviceid)
.set('startTime', deviceStartTimeSession)
.set('endTime', deveiceEndTimeSession)

,{params}*/