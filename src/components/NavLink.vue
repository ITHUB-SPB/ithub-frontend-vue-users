<script lang="ts" setup>
import { RouterLink } from 'vue-router';

const props = defineProps<{
    to: `/${string}`,
    content: string
}>()

</script>

<template>
    <RouterLink :to="props.to">{{ content }}</RouterLink>
</template>

<style scoped>
a {
    color: black;
    text-decoration: none;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.5;
}

.router-link-active {
    font-weight: 600;
    color: rgb(255, 100, 100);
    pointer-events: none;
}
</style>