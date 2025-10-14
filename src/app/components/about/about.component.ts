import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'David Quintero',
      position: 'Fundador & CEO',
      image: 'assets/images/team-1.jpg',
      description: ''
    },
    {
      name: 'David Rodriguez',
      position: 'Co-Fundador & CTO',
      image: 'assets/images/team-2.jpg',
      description: ''
    }
  ];

  values = [
    {
      icon: 'leaf',
      title: 'Sostenibilidad',
      description: 'Compromiso con prácticas agrícolas sostenibles'
    },
    {
      icon: 'heart',
      title: 'Calidad',
      description: 'Productos frescos y orgánicos de la más alta calidad'
    },
    {
      icon: 'users',
      title: 'Comunidad',
      description: 'Apoyo a agricultores locales y comunidades rurales'
    }
  ];
}