import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/content.service';

@Component({
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent {

  constructor(
    private contentService: ContentService,
    private router: Router
  ) { }

  createCar(form: NgForm): void {
    if (form.invalid) { return; }
    this.contentService.createCar(form.value).subscribe({
      next: () => {
        this.router.navigate(['/catalogue']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
