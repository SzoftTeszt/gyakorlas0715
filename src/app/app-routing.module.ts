import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NyaklancComponent } from './nyaklanc/nyaklanc.component';
import { SzallodaarakComponent } from './szallodaarak/szallodaarak.component';

const routes: Routes = [
  {path:"nyaklanc", component:NyaklancComponent},
  {path:"szallodaarak", component:SzallodaarakComponent},
  {path:"", component:SzallodaarakComponent},
  {path:"**", component:SzallodaarakComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
