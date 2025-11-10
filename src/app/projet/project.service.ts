import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getProjects() {
    return [
      {
        title: 'Gestion de dettes',
        description: 'Application pour gérer les dettes des clients.',
        technologies: ['Angular', 'Laravel', 'Tailwind CSS'],
        link: 'https://github.com/votre-repo',
      },
      {
        title: 'Portfolio',
        description: 'Portfolio pour mettre en valeur mes compétences.',
        technologies: ['Angular', 'Node.js'],
        link: 'https://github.com/votre-repo',
      },
    ];
  }
}
