<template>
<div>

  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <Snackbar />
</div>
</template>

<script src="./app.js" />

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
</style>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
