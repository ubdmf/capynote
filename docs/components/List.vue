<script setup>
import { ref } from 'vue'
const props = defineProps({
    list: {
        type: Array,
        required: true
    }
})
const opacity = ref({opacity: 0})
const items = ref(props.list)
const clickHandler = (e) => {
  // 隐藏所有的 .detail 元素
  opacity.value.opacity = 0

  // 获取被点击的 .detail 元素
  let definition = e.target.parentElement.querySelector('.detail');
  if (!definition) {
    definition = e.target.parentElement
  }
  if (definition) {
    definition.style.opacity = 1
  }
}

const showDetail = () => {
    opacity.value.opacity = opacity.value.opacity === 0 ? 1 : 0
}
</script>

<template>
<button @click="showDetail">显示 / 隐藏</button>

<div class="study-framework">
    <div class="title" v-for="item in items" :key="item.id" @click="clickHandler">
      <h2>{{ item.id }} {{ item.name }}</h2>
      <ul v-if="item.children && item.children.length">
        <li v-for="child in item.children" :key="child.id">
          <span>{{ child.id }} {{ child.name }}</span>
          <span v-if="child.define" class="detail" :style="opacity">
            <span :class="child.type">{{ child.define }}</span>
          </span>
          <ul v-if="child.children && child.children.length">
            <li v-for="grandChild in child.children" :key="grandChild.id">
              <span>{{ grandChild.name }}</span>
              <span v-if="grandChild.define" class="detail" :style="opacity">
                <span :class="grandChild.type">{{ grandChild.define }}</span>
              </span>
              <ul v-if="grandChild.children && grandChild.children.length">
                <li v-for="greatGrandChild in grandChild.children" :key="greatGrandChild.id">
                  <span>{{ greatGrandChild.name }}</span>
                  <span v-if="greatGrandChild.define" class="detail" :style="opacity">
                    <span :class="greatGrandChild.type">{{ greatGrandChild.define }}</span>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
</div>


</template>

<style scoped>
.study-framework ul {

  padding-left: 20px;
}
.study-framework li {
  cursor: pointer;
  margin: 5px 0;
}
.study-framework .detail {
  margin-left: 10px;
}
</style>