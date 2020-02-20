import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ordinateurs } from 'src/app/model/ordinateurs';
import { OrdinateursService } from 'src/app/service/ordinateurs.service';

@Component({
  selector: 'app-ajout-ordinateurs',
  templateUrl: './ajout-ordinateurs.component.html',
  styleUrls: ['./ajout-ordinateurs.component.css']
})
export class AjoutOrdinateursComponent implements OnInit {
  articleForm: Ordinateurs;
  marqueDisponible: string[];
  typeOrdinateursDisponible: string[];

  constructor(private ordinateursService: OrdinateursService,
    private router: Router) { }

  ngOnInit() {
    this.marqueDisponible = this.ordinateursService.marqueDisponible;
    this.typeOrdinateursDisponible = this.ordinateursService.typeOrdinateursDisponible;


    this.articleForm = new Ordinateurs();
  }

  onSubmit() {
    this.ordinateursService.addOrdinateurs(this.articleForm).subscribe(data => {
      this.router.navigate(['/ordinateurs']);
    })

  }

}

