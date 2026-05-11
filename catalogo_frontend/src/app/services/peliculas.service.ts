import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor(private http: HttpClient) {}

  obtenerPeliculas() {
    return this.http.get<Pelicula[]>('http://127.0.0.1:8000/peliculas');
  }

  obtenerIdPelicula(id: number) {
    return this.http.get<Pelicula>(`http://127.0.0.1:8000/peliculas/${id}`);
  }

  agregarPelicula(pelicula: Pelicula) {
    return this.http.post<Pelicula>(
      'http://127.0.0.1:8000/peliculas',
      pelicula,
    );
  }

  editarPelicula(id: number, pelicula: Pelicula) {
    return this.http.put<any>(
      `http://127.0.0.1:8000/peliculas/${id}`,
      pelicula,
    );
  }

  eliminarPelicula(id: number) {
    return this.http.delete<any>(`http://127.0.0.1:8000/peliculas/${id}`);
  }
}
