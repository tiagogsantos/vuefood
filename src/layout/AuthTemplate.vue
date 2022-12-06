<template>
  <div>
    <div class="container container-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './_partials/header.vue';
import FooterComponent from './_partials/footer.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style scoped>

@import url('../assets/css/reset.css');
@import url('../assets/css/auth.css');
@import '~@fortawesome/fontawesome-free/css/all.min.css';

</style>