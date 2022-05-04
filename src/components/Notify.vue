<script setup lang="ts">
import { computed } from "vue";
export type NotifyProps = {
  msg: string;
  background?: string;
  color?: string;
  type?: "primary" | "warning" | "success" | "danger";
  fixed?:boolean
};
const props = defineProps<NotifyProps>();

const notifyClass = computed(() => {
  return ["notify-default", props.type ? `notify-${props.type}` : ""];
});
const color = computed(() => [
  props.color ? { color: props.color } : ""
  
]);
const background = computed(() => props.background ? { background: props.background } : "")
</script>
<template>
  <div :class="notifyClass" :style="[color,background]">
    {{ msg }}
  </div>
  <div class="notify-default" v-if="props.fixed">
    {{ msg }}
  </div>
</template>
<style scoped lang="less">
.notify-default {
  background: @white;
  color: @text-primary;
  font-size: 14px;
  height: 40px;
  width: 100%;
  line-height: 40px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 15px;
}

.notify-primary {
  color: @white;
  background: @primary;
}
.notify-success {
  color: @white;
  background: @success;
}

.notify-warning {
  color: @white;
  background: @warning;
}
.notify-danger {
  color: @white;
  background: @danger;
}
</style>
