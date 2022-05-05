<script setup lang="ts">
import { computed } from "vue";
export type backgroundType  = string | undefined
export type Navigation = {
  name: string;
  icon: string;
  background?: string;
};
export type NavigationProos = {
  navigations: Navigation[];
  background?: string ;
};
const props = defineProps<NavigationProos>();
const parentStyle = computed(() => {
  return {
    background: props.background || "#fff",
  };
});
const childStyle = computed(() => (background:backgroundType) => {
    return {
        background: background || "#FF6A39 "
    }
})
</script>

<template>
  <div class="navigations" :style="parentStyle">
    <div class="n-item" v-for="item in navigations" :style="childStyle(item.background)">
      <img :src="item.icon" alt="" />
      <div class="n-name">{{ item.name }}</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.navigations {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: @white;
}
.n-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 75px;
  overflow: hidden;
  img {
    width: 30px;
    height: 31px;
  }
  .n-name {
    font-size: 12px;
    color: @dark;
    line-height: 17px;
  }
}
</style>
