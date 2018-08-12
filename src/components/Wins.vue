<template>
  <div class="wins">
    <table class="bg">
      <thead>
        <tr>
          <th>pic</th>
          <th>player</th>
          <th>location</th>
          <th>last time crushed</th>
          <th>score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img alt="ur mom" src="../assets/urmom.jpg"></td>
          <td>ur mom</td>
          <td>my house</td>
          <td>every night</td>
          <td>69 - 0</td>
        </tr>
        <tr v-for="player in paktd" :key="player.id">
          <td><img v-bind:src="player.avatar"></td>
          <td><a v-bind:href="player.profile">{{player.name}}</a></td>
          <td><a v-bind:href="'http://www.google.com/maps/place/'+player.coordinates" target="_blank">{{player.location}}</a></td>
          <td>{{new Date(player.date).toLocaleTimeString("en-us", dateOptions)}}</td>
          <td>69 - 0</td>
        </tr>
        <tr>
          <td><img alt="ur mom still" src="../assets/urmom.jpg"></td>
          <td>ur mom again!</td>
          <td>ur house now!</td>
          <td>back2back</td>
          <td>69 - 0</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db } from '../main';

export default {
  name: 'Wins',
  data() {
    return {
      paktd: [],
      dateOptions: {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit',
      },
    };
  },
  firestore() {
    return {
      paktd: db.collection('paktd').orderBy('date', 'desc'),
    };
  },
};
</script>

<style scoped>
table, th, td {
  border-width: 2px;
  border-style: inset;
  border-color: #c0c0c0;
}
tr td:last-child {
  font-weight: 900;
}
a:link, a:visited {
    color: hotpink;
}
a:hover, a:active {
    color: limegreen;
}
</style>
