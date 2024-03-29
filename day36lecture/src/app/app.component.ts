import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NumberService } from './services/number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
  
export class AppComponent {
  title = 'day36lecture';

  private router = inject(Router);
  private numSvc = inject(NumberService);

  goHome() {
    console.info('>>> go home by Typescript');
    this.router.navigate(['/']);
  }

  onNumberSelected(elem: any) {
    console.info('elem', elem.target.value);

    const toDisplay: number = elem.target.value;
    const dim = { width: 300 };

    this.numSvc.setNumber(toDisplay)
    this.numSvc.imageWidth = 400

    // toDisplay is part of @PathVariable
    // dim.width is part of @RequestParams
    this.router.navigate(['/number', toDisplay], {
      queryParams: { width: dim.width },
    });
  }
}
