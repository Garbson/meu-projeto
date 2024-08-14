<script setup>
import { RouterView } from "vue-router";
import Drawer from "./components/Drawer.vue";
</script>

<template>
  <main class="d-flex flex-row p-0">
    <Drawer />
    <RouterView style="margin-left: 30px" />
  </main>
</template>
