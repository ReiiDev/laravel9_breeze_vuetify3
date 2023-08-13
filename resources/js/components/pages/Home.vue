<script setup>
import { useCounterStore } from '../../mainStore'
const store = useCounterStore()
console.log(store)

const { increment } = store
</script>

<template>
  <v-container fluid>
    <v-alert
      color="orange"
      theme="dark"
      icon="mdi-firework"
      border
    >
      <h1>MY HOMIE</h1>
    </v-alert>
    <h3>Count: {{store.count}}</h3>
    <v-btn @click="increment()">
      +
    </v-btn>
  </v-container>
</template>