import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isSearchActive: boolean = false;
  searchQuery: string = '';
  cartItemCount: number = 0;

  ngOnInit() {
    // Aquí podrías inicializar el contador del carrito
    // Por ejemplo, obteniendo el valor de un servicio
    this.cartItemCount = 0;
  }

  toggleSearch() {
    this.isSearchActive = !this.isSearchActive;
    if (this.isSearchActive) {
      setTimeout(() => {
        const searchInput = document.querySelector('.search-form input') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }, 100);
    }
  }

  closeSearch() {
    this.isSearchActive = false;
    this.searchQuery = '';
  }

  onSearch(event: Event) {
    event.preventDefault();
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
      // Aquí implementarías la lógica de búsqueda
      this.closeSearch();
    }
  }
}
