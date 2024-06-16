import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhysicalTherapyPage } from './physical-therapy.page';

const routes: Routes = [
  {
    path: '',
    component: PhysicalTherapyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhysicalTherapyPageRoutingModule {}
