import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { NewCarComponent } from './new-car/new-car.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
  {
    path: 'catalogue',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ThemesComponent
      },
      {
        path: ':themeId',
        component: ThemeComponent
      }
    ]
  },
  {
    path: 'add-car',
    component: NewCarComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/login',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
