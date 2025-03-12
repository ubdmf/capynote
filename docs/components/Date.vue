<script setup>
import { useData } from 'vitepress';
import { formatDate } from '../utils/DateFormater';

const { frontmatter } = useData();

const date = frontmatter.value.date;

</script>

<template>
    <div>{{ formatDate(date) }}</div>
</template>

<style scoped>
div {
    font-size: 12px;
    color: #999;
    margin-left: 2px;
}
.dark div {
    color: #fff;
}
</style>
