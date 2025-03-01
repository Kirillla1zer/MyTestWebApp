import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './Components/devices/devices.component';
import { DevicesDetailComponent } from './Components/devices-detail/devices-detail.component';

const routes: Routes = [
{path: "",redirectTo: "Devices" ,pathMatch: "full"},
{path: "Devices/:id", component: DevicesDetailComponent},
{path: "Devices",component: DevicesComponent}

];// Это массив который будет в себя принимать некоторые обьекты
//где один из обьектов будет одним из наших маршрутов

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
