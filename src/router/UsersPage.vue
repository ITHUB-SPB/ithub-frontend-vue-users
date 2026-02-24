<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import type { User, UsersDTO } from '@/types';
import Typography from '@/components/Typography.vue';
import Paper from '@/components/Paper.vue';

const users = ref<User[]>([])
const offset = ref<number>(0)
const loading = ref<boolean>(false)
const errorMessage = ref<string | null>(null)

const getUsers = (limit: number) => {
    const url = 'http://localhost:5173/data/users.json'
    loading.value = true
    errorMessage.value = null

    fetch(url)
        .then<UsersDTO>(response => {
            if (!response.ok) {
                throw new Error('Сетевая ошибка')
            }
            return response.json()
        })
        .then((data: UsersDTO) => {
            users.value = data.users.slice(offset.value, offset.value + limit)
            // проверять, сколько юзеров прогрузилось в текущем запросе,
            // и если это количество меньше пяти, то переставать отображать 
            // кнопку "Load More..."
            offset.value += limit
        })
        .catch((error: unknown) => {
            errorMessage.value = (error as Error).message
        })
        .finally(() => {
            loading.value = false
        })
}

onMounted(() => getUsers(5))

</script>

<template>
    <Typography type="h1" content="Users" />
    <div v-show="loading">
        <!-- добавить спиннер (через background-image на диве) -->
        <!-- ... или через img с svg-иконкой (0.5 балла) -->
        <!-- бонус: плюс 0.5 балла за анимацию спиннера -->
    </div>
    <article>
        <Paper v-for="user in users" :key="user.id">
            <span>
                {{ user.firstName }}
                {{ user.lastName }}
                {{ user.maidenName }}
            </span>
            <!-- TODO: добавить email (0.5) -->
        </Paper>
        <Paper>
            <!-- отрисовывать этот блок по условию (логика описана на строке 26) 1 балл-->
            <button @click="getUsers(5)">Load more...</button>
        </Paper>
    </article>
</template>

<style scoped>
button {
    width: 100%;
    border: 0;
    cursor: pointer;
}

/* TODO: добавить стили (0.5) для соответствия макету*/
</style>