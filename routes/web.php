<?php

use Illuminate\Support\Facades\Route;

use App\Models\Movie;
use Illuminate\Http\Request;

// Traer todas las películas
Route::get('/peliculas', function () {
    $peliculas = Movie::all();
    return $peliculas;
});

// Traer una película por ID
Route::get('/peliculas/{id}', function ($id) {
    $pelicula = Movie::find($id);
    return $pelicula;
});

// Insertar nuevos registros con POST
Route::post('/peliculas', function (Request $request) {
    $pelicula = new Movie();

    $pelicula->title = $request->title;
    $pelicula->synopsis = $request->synopsis;
    $pelicula->year = $request->year;
    $pelicula->cover = $request->cover;

    $pelicula->save();

    return $pelicula;
})->withoutMiddleware([\Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class]);

// Cambiar registro con PUT
Route::put('/peliculas/{id}', function (Request $request, $id) {

    $pelicula = Movie::find($id);

    if (!$pelicula) {
        return response()->json([
            'mensaje' => 'No se encontró la película'
        ], 404);
    }

    $pelicula->title = $request->title;
    $pelicula->synopsis = $request->synopsis;
    $pelicula->year = $request->year;
    $pelicula->cover = $request->cover;

    $pelicula->save();

    return response()->json([
        'mensaje' => 'La película se actualizó correctamente',
        'pelicula' => $pelicula
    ]);
})->withoutMiddleware([\Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class]);

// Eliminar película con DELETE
Route::delete('/peliculas/{id}', function ($id) {

    $pelicula = Movie::find($id);

    if (!$pelicula) {
        return response()->json([
            'mensaje' => 'No se encontró la película'
        ], 404);
    }

    $pelicula->delete();

    return response()->json([
        'mensaje' => 'La película se eliminó correctamente'
    ]);
})->withoutMiddleware([\Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class]);
