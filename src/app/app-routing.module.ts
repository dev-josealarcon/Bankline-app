import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovementNewComponent } from './components/movement-new/movement-new.component';
import { MovementListComponent } from './components/movement-list/movement-list.component';
import { AccountHolderComponent } from './components/accountHolder/accountHolder.component';



const routes: Routes = [
  { path: 'movements-new', component: MovementNewComponent },
  { path: 'movements', component: MovementListComponent },
  { path: 'accountHolders', component: AccountHolderComponent },
  { path: '', redirectTo: 'movements', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
