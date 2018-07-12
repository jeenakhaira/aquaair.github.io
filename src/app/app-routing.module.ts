import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavBarComponent} from './components/nav-bar/nav-bar.component';
import { LoginComponent} from './components/login/login.component';
import { RequestComponent } from './components/request/request.component';
import { AdvertisementsComponent} from './client-side/components/advertisements/advertisements.component';
import { InventoryComponent} from './client-side/components/inventory/inventory.component';
import { MachinesComponent} from './client-side/components/machines/machines.component';
import { MaintenceComponent} from './client-side/components/maintence/maintence.component';
import { SupportComponent} from './client-side/components/support/support.component';
import { SideMenuComponent } from './client-side/components/side-menu/side-menu.component'

const routes: Routes = [
  {path: 'nav-bar', component: NavBarComponent},
  {path: '', component: LoginComponent},
  {path: 'request', component: RequestComponent},
  {path: 'advertisements', component: AdvertisementsComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'machines', component: MachinesComponent},
  {path: 'maintence', component: MaintenceComponent},
  {path: 'support', component: SupportComponent},
  {path: 'side-menu', component: SideMenuComponent},

];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
