<template>
  <header>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-vuefood">
      <div class="container">
        <router-link :to="{name: 'home'}">
          <a class="navbar-brand">
            <img src="@/assets/imgs/logo-vuefood.png" alt="VueFood" class="logo">
          </a>
        </router-link>
        <div>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item nav-cart active">
              <a class="nav-link">
                <router-link :to="{name: 'cart'}" class="nav-link">
                  <i class="fas fa-shopping-cart"></i> (2)
                </router-link>
              </a>
            </li>
            <li class="nav-item nav-cart">
                <router-link :to="{name: 'login'}" class="nav-link">Entrar</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header"
}
</script>

<style scoped>

</style>