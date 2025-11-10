import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  modalVisible = false;
  videoModalVisible = false;
  modalTitle = '';
  modalDescription = '';
  modalLanguages = '';
  videoSrc = '';

  @ViewChild('videoPlayer') videoPlayerRef: ElementRef | undefined;

  projects = [
     {
      title: 'Njabatech',
      image: 'assets/images/site.png',
      description: 'site de vente de produit',
      languages: 'Reactjs, TypeScript, CSS',
      siteUrl: 'https://www.njabatech.com',
     },
      {
      title: 'Application Gestion des GIE',
      image: 'assets/images/nn.png',
       languages: 'React Native avec expo, Css',
       gtihubURL: 'https://github.com/Ramaseck1/GestionGIE',
    },
    {
      title: 'Reseaux socials des tailleurs',
      image: 'assets/images/tailleur.png',
       languages: 'Reactjs, tailwind Css, Typescript',
       gtihubURL: 'https://github.com/PROJET-ODC/projet-tailleur-front',
    },
    
    {
      title: 'Gestion Client',
      image: 'assets/images/image.png',
       languages: 'Nodejs, prisma ,mongoDb ',
      gtihubURL: 'https://github.com/seckrama/GestClient',
    } ,
     {
      title: 'Gestion Hotel',
      image: 'assets/images/sunuHotel.png',
       languages: 'html, css, CSS',
      gtihubURL: 'https://github.com/Ramaseck1/Gestion-Hotel',
    },
    {
      title: 'Application de reservation de Ticket',
      image: 'assets/images/videos.webm',
      description: 'Description du projet 3',
      languages: 'React native, Tailwind css ,API REST',
    },
  ];

  openModal(project: any) {
    this.modalTitle = project.title;
    this.modalDescription = project.description;
    this.modalLanguages = project.languages;
    this.modalVisible = true;
  }

  
  closeModal() {
    this.modalVisible = false;
    this.videoModalVisible = false;
  }

  openVideoModal(videoUrl: string) {
    this.videoSrc = videoUrl;
    this.videoModalVisible = true;
  }
  
}
