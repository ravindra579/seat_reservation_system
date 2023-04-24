import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainReservationComponent } from './train-reservation/train-reservation.component';

const routes: Routes = [
 {path: '', component: TrainReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
