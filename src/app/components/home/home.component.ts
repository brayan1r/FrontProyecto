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
    },
    {
      name: 'Papa',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlRB3-6ZUdPYgGYef7-F0vaDKFQDBjH9zsw&s',
      price: 6000,
      description: 'papas tiernas y nutritivas recién cosechadas',
      category: 'Verduras',
      unit: 'kg'
    },
    {
      name: 'Platano',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/PlatanosVerdesBarranquilla.jpg/1200px-PlatanosVerdesBarranquilla.jpg',
      price: 6000,
      description: 'platano tiernas y nutritivas recién cosechadas',
      category: 'Hortalizas',
      unit: 'kg'
    },
    {
      name: 'Yuca',
      image: 'https://www.agrosavia.co/media/1409/agrosavia-busca-liberar-variedades-de-yuca-para-fortalecer-agroindustria-del-pai-s_agrosavia.jpg',
      price: 6000,
      description: 'Espinacas tiernas y nutritivas recién cosechadas',
      category: 'Hortalizas',
      unit: 'kg'
    },
    {
      name: 'Mandarina',
      image: 'https://cocalni.com/wp-content/uploads/2023/12/c0bc01971ce245badf2ecb80e44210ba806ed1b937d5fa2f0e728feb0f16d4b6c3ee2b34a509a0fa545b44ad0a2fddd7923613dd28f026210d71cd_1280.jpg',
      price: 7000,
      description: 'Mandarina tiernas y nutritivas recién cosechadas',
      category: 'Frutas',
      unit: 'kg'
    },
    {
      name: 'Naranja',
      image: 'https://www.lavanguardia.com/files/image_449_220/files/fp/uploads/2022/06/26/62b85245d0ebb.r_d.241-320-9335.jpeg',
      price: 3000,
      description: 'Naranja tiernas y nutritivas recién cosechadas',
      category: 'Frutas',
      unit: 'kg'
    },
     {
      name: 'Pitaya',
      image: 'https://caribbeanexotics.com.co/wp-content/uploads/2020/12/pitahaya-producto-caribbean-exotics.png',
      price: 8000,
      description: 'Pitaya tiernas y nutritivas recién cosechadas',
      category: 'Frutas',
      unit: 'kg'
    }
  ];
}
