<template>
<div id="app">
<div class="header">
    <div class="title">
      <h1>Cookie Clicker</h1>
    </div>
    <div class="home-link">
	<router-link to="/">
		<p>Home</p>
        </router-link>
    </div>
    <div class="display-link">
        <router-link to="/scores">
                <p>Scores</p>
        </router-link>
    </div>

  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <a href="https://github.com/dmitton/creativeProject4">GitHub Account</a>
  </div>
</div>
</template>

<style>
html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

/* Header */
.header {
  height: 200px;
  display: flex;
  padding: 10px 100px 0px 100px;
  background-image: linear-gradient(#FA8072,#FF6347);
  color: #4a4141;
  align-items: center;
  justify-content: center;
}


.title {
  padding-top: 30px;
  text-align: center;
  margin-top: 5px;
}

.title h1 {
  font-size: 50px;
}

.home-link{
 padding-left: 300px;
 padding-top:30px;
}

.display-link{
  padding-top: 30px;
  padding-left:10px;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
  background-color: #A9A9A9;
}

/* Footer */
.footer {
  height: 100px;
  padding: 20px 100px 0px 100px;
  background-image: linear-gradient(#FA8072,#FF6347);
  font-size: 12px;
}

.footer a {
  font-size: 30px;
  color: #000;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>
