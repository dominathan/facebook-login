import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';

const COMPONENTS: any[] = [
  HomeComponent,
  LoginComponent,
  MapComponent
]

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'map', component: MapComponent }
    ]
  }
]

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule
  ],
  declarations: [
    COMPONENTS
  ],
  exports: [
    COMPONENTS,
    NativeScriptModule,
    NativeScriptRouterModule
  ]
})

export class ComponentsModule { }
