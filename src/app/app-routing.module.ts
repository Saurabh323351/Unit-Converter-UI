import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConverterComponent } from './Components/converter/converter.component';

const routes: Routes = [

  { path: 'unit', component: ConverterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
