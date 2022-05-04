<script setup lang="ts">

</script>

<template>
  <div class="layout">
  <div class="conponent">left</div>
  <div class="container">
    <div class="mobile"></div>
  </div>
  <div class="setting">setting</div>
  </div>
</template>

<style scoped>
.layout {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.conponent {
  width: 200px;
}
.container {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: inherit;
}
.mobile {
  width: 390px;
  background-color: #040404;
  height: 100%;
  overflow-y: scroll;
}
.setting {
  width: 380px;
}
</style>
