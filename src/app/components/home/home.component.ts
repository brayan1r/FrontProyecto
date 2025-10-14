import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  featuredProducts = [
    {
      name: 'Fresas Orgánicas',
      image: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=800',
      price: 12000,
      description: 'Fresas dulces y jugosas cultivadas sin pesticidas',
      category: 'Frutas',
      unit: 'kg'
    },
    {
      name: 'Tomates Cherry',
      image: 'https://images.unsplash.com/photo-1558818498-28c1e002b655?w=800',
      price: 8000,
      description: 'Tomates cherry frescos, perfectos para ensaladas',
      category: 'Hortalizas',
      unit: 'kg'
    },
    {
      name: 'Aguacate Hass',
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800',
      price: 15000,
      description: 'Aguacates cremosos y maduros listos para consumir',
      category: 'Frutas',
      unit: 'kg'
    },
    {
      name: 'Zanahorias Orgánicas',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800',
      price: 5000,
      description: 'Zanahorias frescas cultivadas en suelo orgánico',
      category: 'Hortalizas',
      unit: 'kg'
    },
    {
      name: 'Manzanas Rojas',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800',
      price: 7000,
      description: 'Manzanas rojas y crujientes de cultivo local',
      category: 'Frutas',
      unit: 'kg'
    },
    {
      name: 'Espinacas Baby',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800',
      price: 6000,
      description: 'Espinacas tiernas y nutritivas recién cosechadas',
      category: 'Hortalizas',
      unit: 'kg'
    }
  ];
}