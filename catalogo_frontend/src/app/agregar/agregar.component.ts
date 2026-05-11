import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';
import { Pelicula } from '../models/pelicula';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css',
})
export class AgregarComponent {
  pelicula: Pelicula = {
    title: '',
    synopsis: '',
    year: 0,
    cover: '',
  };

  constructor(
    private peliculasService: PeliculasService,
    private router: Router,
  ) {}

  guardar() {
    // Loader
    Swal.fire({
      title: 'Guardando...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    this.peliculasService.agregarPelicula(this.pelicula).subscribe({
      // Alert
      next: () => {
        Swal.fire({
          title: 'Pelicula agregada',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        }).then(() => {
          this.router.navigate(['/movies']);
        });
      },
      // Error
      error: () => {
        Swal.fire({
          title: 'Error',
          text: 'No se pudo guardar la película',
          icon: 'error',
        });
      },
    });
  }
}
