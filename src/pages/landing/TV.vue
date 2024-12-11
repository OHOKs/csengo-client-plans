<template>
  <div class="chart-container">
    <div class="chart">
      <canvas class="vote-chart" id="voteChart"></canvas>
    </div>
    <div class="legend">
      <h1>Színek -- zenék:</h1>
      <ul class="title-container">
        <li v-for="(song, index) in songs" :key="song.songId">
          <span :style="{ backgroundColor: colors[index] }" class="color-box"></span>
          <span class="song-title">{{ song.songTitle }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default {
  setup() {
    const songs = ref([
      { songId: "e33d8a9e-506b-4423-be15-4bccbca941fe", songTitle: "Alma20", voteCount: 121 },
      { songId: "9a380d38-3537-4b4d-8e8e-4dafb9fad375", songTitle: "zene1", voteCount: 110 },
      { songId: "a5962c85-09de-4115-a7d5-7a8811ac25f6", songTitle: "zene2", voteCount: 140 },
      { songId: "b2fbe141-f3f1-46a7-b3af-16d6a0c0baf9", songTitle: "alma", voteCount: 160 },
      { songId: "d09a3d33-780f-40a1-a591-83e87e31dc5f", songTitle: "title", voteCount: 120 },
      { songId: "969bf7e2-d5f0-49a5-856c-cab9d92900dc", songTitle: "asdawgagsgfghjavwfdhkagbkfluaa", voteCount: 11 },
    ]);

    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const colors = ref(songs.value.map(() => getRandomColor()));

    let chartInstance = null;

    const createChart = () => {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const ctx = document.getElementById('voteChart').getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: songs.value.map(song => song.songTitle),
          datasets: [
            {
              label: 'Szavazatok',
              data: songs.value.map(song => song.voteCount),
              backgroundColor: colors.value,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Zenék',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Szavazatok száma',
              },
              beginAtZero: true,
            },
          },
        },
      });
    };

    onMounted(() => {
      createChart();
    });

    return {
      songs,
      colors,
    };
  },
};
</script>

<style>
.chart-container {
  color: white;
  background-color: black;
  display: flex;
  gap: 20px;
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
}

.chart {
  flex: 3;
}

.legend {
  flex: 1;
}

.color-box {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 3px;
}

.song-title {
  font-size: 25px;
  font-weight: bold;
}

body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
