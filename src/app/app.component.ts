import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http'; // Import de HttpClientModule

@Component({
    selector: 'app-root',
    imports: [
      HomeComponent,
      AboutComponent,
      ProjectsComponent,
      ServicesComponent,
      ContactComponent,
      FooterComponent,
      HttpClientModule // Ajoutez HttpClientModule ici
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
}
