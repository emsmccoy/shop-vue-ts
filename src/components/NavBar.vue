<template>
     <nav class="navbar navbar-expand-lg bg-light">
        <div class="container justify-content-evenly d-flex align-items-center text-center">
        
            <router-link to="/store" class="nav-link active" aria-current="page">
              <span class="material-icons">storefront</span>
            </router-link>
        
            <router-link to="/profile" class="nav-link active" aria-current="page">
              <span class="material-icons">person</span>
            </router-link>
        </div>
    </nav>
</template>
  
<script lang="ts">
  export default {
    name: "NavBar"
  }
</script>