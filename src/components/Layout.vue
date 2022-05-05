<script setup lang="ts">
 import { reactive } from 'vue';
import Navigation from './Navigation.vue'
import Notify from './Notify.vue'
 const navigations =  reactive([
   {
     name:'test1',
     background:'#ff0000',
     icon:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018459568f541732f87574be60c997.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654353882&t=7d39d65d502337dbdf80be20a6bbeb8d"
   },
   {
     name:'test2',
     icon:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018459568f541732f87574be60c997.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654353882&t=7d39d65d502337dbdf80be20a6bbeb8d"
   },
   {
     name:'test1',
     background:'#ff0000',
     icon:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018459568f541732f87574be60c997.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654353882&t=7d39d65d502337dbdf80be20a6bbeb8d"
   },
   {
     name:'test1',
     background:'#ff0000',
     icon:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018459568f541732f87574be60c997.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654353882&t=7d39d65d502337dbdf80be20a6bbeb8d"
   },
   
   {
     name:'test2',
     icon:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018459568f541732f87574be60c997.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654353882&t=7d39d65d502337dbdf80be20a6bbeb8d"
   }
 ])
</script>

<template>
  <div class="layout">
  <div class="conponent">left</div>
  <div class="container">
    <div class="mobile">
     <Notify msg="这是一个公告" type="warning"/>
      <Navigation :navigations="navigations" background="#0ff"/>
    </div>
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
  justify-content: center;
  align-items: center;
  height: inherit;
}
.mobile {
  width: 390px;
  background-color: #fff;
  height: 100%;
  overflow-y: scroll;
}
.setting {
  width: 380px;
}
</style>
