import { Component, OnInit } from '@angular/core';
import { DevicesListServiceService } from 'src/app/data/devices-list-service.service';
import { Device } from 'src/app/model/device.model';
import { ActivatedRoute} from "@angular/router";
import { map } from 'rxjs';


@Component({
  selector: 'app-devices-detail',
  templateUrl: './devices-detail.component.html',
  styleUrls: ['./devices-detail.component.less']
})
export class DevicesDetailComponent implements OnInit  
{
  

    deviceID:string;

    devices:Device[]=[];
    
    devicesWith_ID:Device[]= [];

    constructor(private devicesListService: DevicesListServiceService,private activateRoute:ActivatedRoute)
    {
      this.deviceID = activateRoute.snapshot.params["id"];
    }
    
    deleteDataOfDeviceSession(device: Device) 
    {
      this.devicesListService.deleteOneOfData(device._id,device.startTime,device.endTime).subscribe(()=>{

        this.devicesListService.getData().pipe(
          map((data:Device[]) => data.filter(device => device._id === this.deviceID)))
        .subscribe( (data:Device[]) =>
            {
            this.devices = data;
            })  
        }



      );
      
    }
  
    ngOnInit()
    {
    this.devicesListService.getData().pipe(
      map((data:Device[]) => data.filter(device => device._id === this.deviceID)))
    .subscribe( (data:Device[]) =>
        {
        this.devices = data;
        })  
    }
}
