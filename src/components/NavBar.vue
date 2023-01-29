<template>
    <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container justify-content-evenly">
          <router-link to="/product" class="nav-link"><span class="material-icons-round">
store
</span> Products</router-link>
          <router-link to="/profile" class="nav-link"><span class="material-icons-round">
account_circle
</span> Profile</router-link>
  </div>
</nav>
</template>
<script>
export default {
    name: "NavBar"
}
</script>
<style scoped>
.material-icons-round{
    color: white;
    font-size: 2em;
    padding: 1 em;
    border-radius: 50%;
    margin: 0.5em;
}

</style>