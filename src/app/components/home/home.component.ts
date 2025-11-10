import { Component,HostListener } from '@angular/core';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 50; // Si l'utilisateur a défilé plus de 50px
  }

}
