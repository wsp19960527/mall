
<script lang="ts" setup>
import { ref } from "vue";
interface Icon {
    url?: string
    name?: string
    type?: number
    path?: string
}
interface IconProps {
    list:Icon[]
}
const props = defineProps<IconProps>()
</script>
<template>
    <div class="icon-box">
        <div class="icon-item" v-for="(item, index) in list" :key="`${item.url + index}`">
            <img :src="item.url" alt="">
            <p class="name">{{name}}</p>
        </div>
    </div>
</template>
<style lang="less">
.icon-box{
    width: 100%;
    .flexfun(@justify:space-between,@align:center);
    .icon-item{
        width: 60px;
        height: 64px;
        .flexfun(@justify:center,@align:center);
        img{
            width: 25px;
            height: 26px;
        }
        .name{
            width: 100%;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 14px;
            font-size: 12px;
            color: #000;
        }
    }
}
</style>