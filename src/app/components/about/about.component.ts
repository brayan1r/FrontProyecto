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
      image: 'https://i0.wp.com/www.nancy.cc/wp-content/uploads/2022/10/caillou-new.png?ssl=1',
      description: ''
    },
    {
      name: 'David Rodriguez',
      position: 'Co-Fundador & CTO',
      image: 'assets/DaviDB.jpeg',
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
