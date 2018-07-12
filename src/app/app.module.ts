import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MachinesComponent } from './client-side/components/machines/machines.component';
import { InventoryComponent } from './client-side/components/inventory/inventory.component';
import { MaintenceComponent } from './client-side/components/maintence/maintence.component';
import { SupportComponent } from './client-side/components/support/support.component';
import { AdvertisementsComponent } from './client-side/components/advertisements/advertisements.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RequestComponent } from './components/request/request.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SideMenuComponent } from './client-side/components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MachinesComponent,
    InventoryComponent,
    MaintenceComponent,
    SupportComponent,
    AdvertisementsComponent,
    NavBarComponent,
    RequestComponent,
    LoginComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
