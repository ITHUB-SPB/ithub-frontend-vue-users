<script lang="ts" setup>
import { useRouter } from 'vue-router';
import Typography from '@/components/Typography.vue';

const router = useRouter()

</script>

<template>
    <Typography type="h1" content="Home page" />
    <Typography type="p">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
        velit mollit. Exercitation veniam consequat sunt nostrud amet.
    </Typography>
    <button @click="router.push('/auth')">Authorization</button>
</template>

<style scoped>
    button {
        background-color: rgb(255, 100, 100);
        color: white;
        font-size: 20px;
        font-weight: 500;
        padding: 7px 43px;
        border: 0;
        cursor: pointer;
    }
</style>