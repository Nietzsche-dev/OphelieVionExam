import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdinateursComponent } from './components/ordinateurs/ordinateurs.component';
import { AjoutOrdinateursComponent } from './components/ajout-ordinateurs/ajout-ordinateurs.component';
import { EditOrdinateursComponent } from './components/edit-ordinateurs/edit-ordinateurs.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'ordinateurs', component: OrdinateursComponent },
  { path: 'ajout-ordinateurs', component: AjoutOrdinateursComponent },
  { path: 'edit-ordinateurs/:id', component: EditOrdinateursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
