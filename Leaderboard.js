<!-- Plantilla 46/100 Leaderboard VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Jugador</th>
        <th scope="col">Puntuación</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(player, index) in players" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ player.name }}</td>
        <td>{{ player.score }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "LeaderboardExample",
  data() {
    return {
      players: [
        { name: "Jugador 1", score: 50 },
        { name: "Jugador 2", score: 70 },
        { name: "Jugador 3", score: 90 },
        { name: "Jugador 4", score: 30 },
        { name: "Jugador 5", score: 65 },
        { name: "Jugador 6", score: 80 },
      ]
    }
  }
}
</script>

<style>
/* Estilos personalizados */
</style>

