<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a class="recommendation-link" :href="link">
    <div class="card">
      <p class="title">{{ title }}</p>
      <p class="date">{{ date }}</p>
      <p class="description">{{ description }}</p>
    </div>
  </a>
</template>

<style scoped>
.card {
  cursor: pointer;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0px;
}
.card:hover {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.dark .card {
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.1);
}
.dark .card:hover {
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.2);
}
.recommendation-link {
  display: block;
  text-decoration: none;
  font-size: 24px;
}
.title {
  font-size: 26px;
  font-weight: bold;
  color: #333;
  margin: 16px 0px 0px 0px;
}
.dark .title {
  color: #fff;
}
.date {
  font-size: 14px;
  color: #666;
  margin: 0px;
}
.dark .date {
  color: #e7e7e7;
}
.description {
  font-size: 20px;
  color: #474747;
}
.dark .description {
  color: #fff;
}
</style>
