import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  recipes = [
    {
      title: 'Ensalada Mediterránea',
      category: 'Ensaladas',
      time: '15 min',
      difficulty: 'Fácil',
      image: 'assets/images/mediterranean-salad.jpg',
      description: 'Una refrescante ensalada con ingredientes mediterráneos'
    },
    {
      title: 'Sopa de Verduras',
      category: 'Sopas',
      time: '30 min',
      difficulty: 'Media',
      image: 'assets/images/vegetable-soup.jpg',
      description: 'Nutritiva sopa casera con verduras de temporada'
    },
    {
      title: 'Crema de Champiñones',
      category: 'Sopas',
      time: '40 min',
      difficulty: 'Fácil',
      image: 'assets/images/mushroom-soup.jpg',
      description: 'Una crema suave y sabrosa con champiñones frescos del campo.'
    },
    {
      title: 'Sopa de Lentejas Clásica',
      category: 'Sopas',
      time: '1h',
      difficulty: 'Fácil',
      image: 'assets/images/lentil-soup.jpg',
      description: 'Un plato reconfortante y lleno de nutrientes, ideal para cualquier día.'
    },
    {
      title: 'Ajiaco',
      category: 'Sopas',
      time: '20 min',
      difficulty: 'Fácil',
      image: 'assets/images/gazpacho-soup.jpg',
      description: ' El ajiaco es una sopa común en Colombia, Cuba y Perú. El origen del plato ha sido debatido por académicos..'
    }
  ];
}