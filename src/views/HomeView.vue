<template>
    <section class="home">
      <div class="intro">
        <h1>Hi, I'm Amit</h1>
        <p>Welcome to my personal website where I share my journey in tech, my adventures, and my projects.</p>
        <router-link to="/projects" class="btn">Explore My Projects</router-link>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "HomeView",
  };
  </script>
  
  <style scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url('https://source.unsplash.com/1600x900/?nature,adventure') no-repeat center center/cover;
    color: #fff;
  }
  
  .intro {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 40px;
    border-radius: 10px;
    text-align: center;
  }
  
  h1 {
    font-size: 3em;
    margin: 0;
  }
  
  p {
    font-size: 1.5em;
    margin: 20px 0;
  }
  
  .btn {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #ff6f61;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 600;
    transition: background-color 0.3s;
  }
  
  .btn:hover {
    background-color: #ff4a3d;
  }
  </style>
  