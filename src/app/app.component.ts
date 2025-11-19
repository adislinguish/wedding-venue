import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet
  ],
})
export class AppComponent {
  title = 'Concurrency App';

  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnit() {
    this.activeRoute.params.subscribe({
      next: (value) => {
        //console.log(value);
      }
    });
  }
}
