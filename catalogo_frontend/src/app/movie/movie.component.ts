import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

// Importar servicio
import { PeliculasService } from '../services/peliculas.service';
import { Pelicula } from '../models/pelicula';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent implements OnInit {
  pelicula?: Pelicula;

  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService,
    private router: Router,
  ) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.peliculasService.obtenerIdPelicula(id).subscribe((data: Pelicula) => {
      this.pelicula = data;
    });
  }

  // Método eliminar
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
              title: 'Película eliminada',
              icon: 'success',
            }).then(() => {
              this.router.navigate(['/movies']);
            });
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
