<template>
  <div>
    <el-button type="success" @click="store.increment()">Success</el-button>
    <h1 class="text-orange-600 font-mono">Hello Windy CSS</h1>
    <Icon icon="carbon:align-horizontal-center" />
    <input type="button" @click="store.increment()" value="increment">
    {{ store.count }}
    {{ store.doubleCount }}
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ElButton, ElInput } from "element-plus";
import { useCounterStore } from "../stores/counter"

const store = useCounterStore();
</script>

<style scoped></style>