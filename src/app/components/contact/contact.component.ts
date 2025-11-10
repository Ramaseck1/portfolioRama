import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Ajoutez cette importation
import { FormService } from '../../form.service';

@Component({
  selector: 'app-contact',
  standalone: true,  // Déclarer ce composant comme standalone
  providers: [FormService],
  imports: [FormsModule, CommonModule, HttpClientModule], // Ajouter HttpClientModule ici
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private formService: FormService) {}

  onSubmit(): void {
    this.formService.submitForm(this.formData).subscribe({
      next: (response) => {
        console.log('Formulaire soumis avec succès:', response);
        alert('Formulaire soumis avec succès !');
        this.formData = { name: '', email: '', message: '' };
      },
      error: (err) => {
        console.error('Erreur lors de la soumission:', err);
        alert('Erreur lors de la soumission du formulaire.');
      }
    });
  }
}
