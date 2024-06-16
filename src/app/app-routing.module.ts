import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'training',
    loadChildren: () => import('./training/training.module').then( m => m.TrainingPageModule)
  },
  {
    path: 'classes',
    loadChildren: () => import('./classes/classes.module').then( m => m.ClassesPageModule)
  },
  {
    path: 'massage',
    loadChildren: () => import('./massage/massage.module').then( m => m.MassagePageModule)
  },
  {
    path: 'membership',
    loadChildren: () => import('./membership/membership.module').then( m => m.MembershipPageModule)
  },
  {
    path: 'haircut',
    loadChildren: () => import('./haircut/haircut.module').then( m => m.HaircutPageModule)
  },
  {
    path: 'physical-therapy',
    loadChildren: () => import('./physical-therapy/physical-therapy.module').then( m => m.PhysicalTherapyPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
