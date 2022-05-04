<script lang="ts" setup>import { ref } from 'vue';

export type List = {
  url: string;
  type: "page" | "minprograme" | "none";
  path?: string;
};
type ImagePropsType = {
    list: List[]
}
const props = defineProps<ImagePropsType>();
const placeholder = ref('http://cdn2.weimob.com/saas/@assets/saas-fe-retail-h5-stc/image/goods/classify/zanwutupian.png')
</script>
<template>
  <div class="images">
    <img :src="placeholder" v-if="list.length < 1"/>
    <img :src="item.url" v-for="item in list" alt="" />
  </div>
</template>

<style lang="less" scoped>
    .images{
        min-height: 50px;
        img{
            width: 100%;
            height: auto;
        }
    }
</style>
