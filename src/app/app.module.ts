import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DevicesComponent } from './Components/devices/devices.component';
import { DevicesDetailComponent } from './Components/devices-detail/devices-detail.component';
@NgModule({
  declarations: [AppComponent, DevicesComponent, DevicesDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

