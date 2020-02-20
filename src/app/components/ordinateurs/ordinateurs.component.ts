import { Component, OnInit } from '@angular/core';
import { Ordinateurs } from 'src/app/model/ordinateurs';
import { OrdinateursService } from 'src/app/service/ordinateurs.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './ordinateurs.component.html',
  styleUrls: ['./ordinateurs.component.css']
})
export class OrdinateursComponent implements OnInit {
  nbrestock: number;
  ordinateur: Ordinateurs[];
  isLoading: boolean;
  rentabilite: number;
  constructor(private ordinateursService: OrdinateursService) { }

  ngOnInit() { 
    this.isLoading = true;
    this.ordinateursService.getAllOrdinateurs().subscribe((data: Ordinateurs[]) => {
      this.ordinateur = data;
      this.isLoading = false;
      this.nbrestock = this.ordinateur.length;
    });
  }
  deleteOrdinateurs(ordinateur) {
    this.ordinateursService.deleteOrdinateurs(ordinateur.id).subscribe((data: Ordinateurs) => {
      this.ordinateursService.getAllOrdinateurs().subscribe((result: Ordinateurs[]) => {
        this.ordinateur = result;
        this.nbrestock = this.ordinateur.length;
      })
    })
  }
}
