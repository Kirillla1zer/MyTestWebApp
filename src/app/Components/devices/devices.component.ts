import { Component } from '@angular/core';
import { DevicesListServiceService } from 'src/app/data/devices-list-service.service';
import { Device } from 'src/app/model/device.model';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.less']
})
export class DevicesComponent {

  isButtonClicked:boolean=false;

  devices:Device[]=[];// Массив для хранения устройств

  devicesWithUniq:Device[]=[];//массив для вывода уникальных устройств

  Count:number=0; // их количество

  constructor(private devicesListService: DevicesListServiceService)
    {
      console.log("Компонент успешно создан")

      this.devicesListService.getData().subscribe( (data:Device[]) =>
        {
         return this.devices = data;
        })  
    }
    // Создаю массив на основе данных с сервера но только с уникальными _id
    // Чтобы вывести на экран уникальные устройства и чтобы пользователь тыкая
    // мог увидеть все сессии устройства по _id
    getDevicesWithUniq_Id()
    {
      this.isButtonClicked = true;
          for(let i=0;i<this.devices.length;i++)
          {
            let isUnique = true;
            for(let j=0;j<this.devicesWithUniq.length;j++)
            {
                  if (this.devices[i]._id === this.devicesWithUniq[j]._id) 
                {
                    isUnique = false; // Если найдено совпадение, устанавливаем флаг в false
                    break; // Выходим из внутреннего цикла
                }
            }
            if (isUnique===true) 
              {
              this.devicesWithUniq.push(this.devices[i]); // Добавляем уникальный элемент
              }   
          }
     this.Count=this.devicesWithUniq.length;
     return this.devicesWithUniq;
    }
}
