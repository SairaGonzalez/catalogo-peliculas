import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

// Import del service e Interface
import { PeliculasService } from '../services/peliculas.service';
import { Pelicula } from '../models/pelicula';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  peliculas: Pelicula[] = [];
  constructor(private peliculasService: PeliculasService) {}
  ngOnInit() {
    this.peliculasService.obtenerPeliculas().subscribe((data: Pelicula[]) => {
      console.log(data);
      this.peliculas = data;
    });
  }
  eliminar(id: number) {
    // Alert de confirmación
    Swal.fire({
      title: '¿Quieres eliminar la película?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Loader
        Swal.fire({
          title: 'Eliminando...',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });
        this.peliculasService.eliminarPelicula(id).subscribe({
          // Alert de éxito
          next: () => {
            Swal.fire({
              title: 'Eliminado',
              icon: 'success',
            });
            this.peliculas = this.peliculas.filter((p) => p.id !== id);
          },
          // Error
          error: () => {
            Swal.fire('Error', 'No se pudo eliminar', 'error');
          },
        });
      }
    });
  }
}
