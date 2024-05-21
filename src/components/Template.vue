<script setup lang="ts">
defineProps<{
  arg1: string
}>()
</script>

<template>
  <div>
    <template>Test Template</template>
    This is only a non-functional template component with a prop:
    {{ arg1 }}
    <slot></slot>
  </div>
</template>

<style scoped></style>
