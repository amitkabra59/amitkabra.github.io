<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/career">Career</router-link></li>
        <li><router-link to="/adventure">Adventure</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    padding: 15px;
    text-align: center;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  
  li {
    margin: 0 15px;
  }
  
  a {
    color: white;
    text-decoration: none;
    font-weight: 600;
  }
  
  a:hover {
    color: #ff6f61;
  }
  </style>
  