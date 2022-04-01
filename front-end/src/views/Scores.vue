<template>
<div class="home">
  <section class="highscores">
    <div class="highscore" v-for="score in scores" :key="score.id">
    <div class="section">
    <div class="image">
    <img src="download.jpg" height="100" width="100">
    </div>
    <div class="score-user">
      <h2>User: {{score.user}}</h2>
      <h2>Score: {{score.score}}</h2>
    </div>
    </div>
    <br>
    </div>
  </section>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
     scores: [],
    }
  },
  created() {
    this.getScores();
  },
  methods: {
    async getScores() {
      try {
        let response = await axios.get("/api/items");
        this.scores = response.data;
	console.log(this.scores);
        return true;
      } catch (error) {
        console.log(error); 
      }
    },
  }
}
</script>



<style>

.score-user h2{
font-size:40px;
padding-left:10px;
float:left;
padding-right: 10px;
}


.section {
padding-bottom:100px;
padding-top:100px;
}

.image{
float:left;
}
</style>
