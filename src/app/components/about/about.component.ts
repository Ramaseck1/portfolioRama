import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    imports: [],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
  onImageError(event: any) {
    console.error('Erreur image', event);
  }
}
