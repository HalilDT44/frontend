
<script setup lang="ts">

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Halils Autoshop</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">home</router-link>
          <router-link class="nav-link" to="/about">about</router-link>
          <router-link class="nav-link" to="persons">persons</router-link>
<!--          <a class="nav-link active" aria-current="page" href="#">Home</a>-->
<!--          <a class="nav-link" href="#">Features</a>-->
<!--          <a class="nav-link" href="#">Pricing</a>-->
<!--          <a class="nav-link disabled" aria-disabled="true">Disabled</a>-->
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
