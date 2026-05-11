<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MoviesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Movie::truncate();

        $peliculas = [
            [
                'title' => 'Lawrence of Arabia',
                'synopsis' => 'Un oficial británico une a las tribus árabes contra el Imperio Otomano en una épica lucha por la libertad y la identidad.',
                'year' => 1962,
                'cover' => 'LawrenceOfArabia.jpg'
            ],
            [
                'title' => 'All The Presidents Men',
                'synopsis' => 'Dos periodistas del Washington Post desatan el escándalo Watergate, poniendo en jaque a la presidencia de los EE. UU.',
                'year' => 1976,
                'cover' => 'PresidentsMen.jpg'
            ],
            [
                'title' => 'Mississippi Burning',
                'synopsis' => 'Dos agentes del FBI se enfrentan al Ku Klux Klan y a la corrupción local para resolver la desaparición de tres activistas.',
                'year' => 1988,
                'cover' => 'MissisippiBurning.jpg'
            ],
            [
                'title' => 'The Social Network',
                'synopsis' => 'El ascenso meteórico de Facebook y las feroces batallas legales que fracturaron las relaciones de sus fundadores.',
                'year' => 2010,
                'cover' => 'SocialNetwork.jpg'
            ],
            [
                'title' => 'Grave of the Fireflies',
                'synopsis' => 'La desgarradora lucha de dos hermanos por sobrevivir en un Japón devastado por los bombardeos de la Segunda Guerra Mundial.',
                'year' => 1988,
                'cover' => 'Fireflies.jpg'
            ],
            [
                'title' => 'The Batman',
                'synopsis' => 'En su faceta de detective, Batman persigue a un asesino serial que busca exponer la podredumbre histórica de Gotham.',
                'year' => 2022,
                'cover' => 'Batman.jpg'
            ],
            [
                'title' => 'Conclave',
                'synopsis' => 'Un cardenal navega entre conspiraciones y secretos vaticanos mientras dirige la elección del próximo Sumo Pontífice.',
                'year' => 2024,
                'cover' => 'Conclave.jpg'
            ],
            [
                'title' => 'Snatch',
                'synopsis' => 'Un diamante robado desata un caos hilarante y violento entre mafiosos, gitanos y boxeadores en el submundo londinense.',
                'year' => 2000,
                'cover' => 'Snatch.jpg'
            ],
            [
                'title' => 'Rear Window',
                'synopsis' => 'Un fotógrafo confinado a su hogar espía a sus vecinos y se convence de que ha sido testigo de un asesinato.',
                'year' => 1954,
                'cover' => 'RearWindow.jpg'
            ],
            [
                'title' => 'Perfect Days',
                'synopsis' => 'Un hombre que limpia baños en Tokio encuentra la plenitud y la belleza en los rituales más sencillos de su vida cotidiana.',
                'year' => 2023,
                'cover' => 'PerfectDays.jpg'
            ],
        ];

        foreach ($peliculas as $pelicula) {
            \App\Models\Movie::create($pelicula);
        }
    }
}
