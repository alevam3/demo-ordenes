<script setup>

</script>

<template>
  <header class="navbar navbar-dark navbar-expand sticky-top shadow">
    <div class="container-fluid">
      <a class="navbar-brand px-3" href="#">
        <img src="/src/assets/logo-demo.png" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <!-- <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li> -->
          <li class="nav-item">
            <router-link to="/" class="nav-link">Órdenes</router-link>
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-md-0 float-end" >
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">
              <img class="rounded-circle bg-light" src="/src/assets/user.png" />
            </a>
            <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdown03">
              <li><a class="dropdown-item" href="#">Mi perfil</a></li>
              <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>

  <div class="container-fluid">
    <RouterView />
  </div>
</template>

<style scoped>
  nav, header{
    background: #0581cb;
  }
</style>