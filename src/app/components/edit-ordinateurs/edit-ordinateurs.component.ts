import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ordinateurs } from 'src/app/model/ordinateurs';
import { OrdinateursService } from 'src/app/service/ordinateurs.service';

@Component({
  selector: 'app-edit-ordinateurs',
  templateUrl: './edit-ordinateurs.component.html',
  styleUrls: ['./edit-ordinateurs.component.css']
})
export class EditOrdinateursComponent implements OnInit {
  isLoading: boolean;
  articleForm: Ordinateurs;
  marqueDisponible: string[];
  typeOrdinateursDisponible: string[];
  constructor(private route: ActivatedRoute,
    private ordinateursService: OrdinateursService,
    private router: Router) { }

  ngOnInit() {
    this.marqueDisponible = this.ordinateursService.marqueDisponible;
    this.typeOrdinateursDisponible = this.ordinateursService.typeOrdinateursDisponible;
    
    this.isLoading = true;
    this.ordinateursService.getOrdinateursById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Ordinateurs) => {
      this.articleForm = data;
      this.isLoading = false;

    });
  }

  onSubmit() {
    this.ordinateursService.editOrdinateurs(this.articleForm).subscribe((data: Ordinateurs) => {
      this.router.navigate(['/ordinateurs'])
    });
  }
}