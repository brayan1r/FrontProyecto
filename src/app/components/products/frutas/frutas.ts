import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frutas',
  imports: [CommonModule],
  templateUrl: './frutas.html',
  styleUrl: './frutas.scss'
})
export class FrutasComponent {

  frutas = [
    {
      name: 'Manzana Roja',
      price: 5000,
      image: 'https://media.istockphoto.com/id/184276818/es/foto/manzana-red.jpg?s=612x612&w=0&k=20&c=BFD8ixD7eyXMm3aSVIdz1hUsLG-lX8Ig2HBr6IVJuzU=',
      description: 'Manzanas frescas y crujientes, perfectas para un snack saludable.'
    },

    {      name: 'Mango',
      price: 1500,
      image: 'https://img.freepik.com/psd-gratis/delicioso-mango-estudio_23-2151843107.jpg?semt=ais_hybrid&w=740&q=80',
      description: 'Mangos frescos, ideales para batidos y postres.'
    },
    {
      name: 'Fresas',
      image: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/2022-04/fresas%C2%A9iStock.jpg',
      price: 15000,
      description: 'Fresas de alta calidad',
      category: 'Frutas',
      unit: 'kg'
    },
    {
      name: 'Banano',
      image: 'https://media.istockphoto.com/id/173242750/es/foto/racimo-de-pl%C3%A1tanos.jpg?s=612x612&w=0&k=20&c=-RqILbvnZIp5YZRm3BGc-i5n_e2VsJCUu9GU9OqVAbk=',
      price: 5000,
      description: 'Banano fresco cultivado en suelo orgánico',
      category: 'Hortalizas',
      unit: 'kg'
    },
    {
      name: 'Manzana Verde',
      image: 'data:image/jpeg;base64,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',
      price: 7000,
      description: 'Manzanas Verdes ',
      category: 'Frutas',
      unit: 'kg'
    },
    {
      name: 'Naranja',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOFJ2wUJzubVXNnRWGreG4nrvERvXf7XrKpg&s',
      price: 6000,
      description: 'Naranjas  nutritivas recién cosechadas',
      category: 'Frutas',
      unit: 'kg'
    },
    {
      name: 'Sandia',
      image: 'https://azulom.com/607-large_default/sandia.jpg',
      price: 10000,
      description: 'Sandias frescas y jugosas, perfectas para el verano.',
      category: 'Frutas',
      unit: 'kg'
    },
    {
      name: 'Uvas',
      image: 'https://media.istockphoto.com/id/682505832/es/foto/uva-roja-madura-racimo-rosado-con-hojas-aisladas-sobre-blanco-con-trazado-de-recorte.jpg?s=2048x2048&w=is&k=20&c=c3zP-r4a4fBAaQ1hWyWtI59uA0o6zOENMU8TtTJbyOA=',
      price: 8000,
      description: 'Uvas dulces y frescas, ideales para meriendas y postres.',
      category: 'Frutas',
      unit: 'kg'
    },
    ];
}


