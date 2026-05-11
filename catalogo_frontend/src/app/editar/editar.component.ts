import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeliculasService } from '../services/peliculas.service';
import { Pelicula } from '../models/pelicula';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
})
export class EditarComponent implements OnInit {
  pelicula?: Pelicula;

  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService,
    private router: Router,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) return;
    this.peliculasService.obtenerIdPelicula(id).subscribe({
      next: (data: Pelicula) => (this.pelicula = data),
      error: () => {
        Swal.fire({
          title: 'Error',
          text: 'No se pudo cargar la película',
          icon: 'error',
        });
        this.router.navigate(['/movies']);
      },
    });
  }

  actualizar() {
    // Loader
    if (!this.pelicula) return;
    Swal.fire({
      title: 'Actualizando...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    this.peliculasService
      .editarPelicula(this.pelicula.id!, this.pelicula)
      .subscribe({
        // Alert
        next: () => {
          Swal.fire({
            title: 'Película actualizada',
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
            text: 'No se pudo actualizar',
            icon: 'error',
          });
        },
      });
  }
}
