<template>
<div class="home">
  <h1>New User? Sign yourself up! Don't forget to log in!</h1>
  <div class="user-sign-in">
    <div class="form">
        <input v-model="user" placeholder="Username">
        <p></p>
        <button @click="signIn">Sign up</button>
    </div>
  </div>
  <h1> Returning User? Log back in and start clicking!</h1>
  <div class="login-user">
   <div class="form">
        <input v-model="username" placeholder="Username">
        <p></p>
        <button @click="login">Login</button>
    </div>
  </div>
  <div class="game">
   <div v-if="getUser">
   <p>Score: {{getUser.score}}</p>
   </div>
   <button @click="increase()"  type="button"> <img src="download.jpg" height ="200" width="200" /></button>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      username: "",
      user: "",
      score: 0,
      getUser: null,
      addUser: null,
    }
  },
  methods: {
    async signIn() {
      try {
        let r2 = await axios.post('/api/items', {
          user: this.user,
          score: 0,
        });
        this.getUser = r2.data;
        } catch (error) {
        console.log(error);
      }
    },
async login() {
      try {
	console.log(this.username);
        let url = "/api/items/" + this.username;
        let response = await axios.get(url);
        this.getUser = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
async increase() {
      try {
       let url = "/api/items/" + this.username;
       let response =  await axios.put(url);
       console.log(this.username);
       this.getUser = response.data;
       console.log(this.getUser);
        return true;
      } catch (error) {
        console.log(error);
      }
    },


  }
}
</script>

<style>
.game{
padding-bottom:200px;
padding-left:450px;
position: relative;
text-align: center;
display: inline-block;
}
.game p{
font-size:30px;
}

.user-sign-in{
width: 200px;
float:left;
}

.login-user{
width: 200px;
float:left;
}

input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

form{
width:200px;
}


h1{
width:200px;
}
</style>
