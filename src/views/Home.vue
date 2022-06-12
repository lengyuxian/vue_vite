<script setup>
import { ref, reactive } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
// 测试
const state = reactive({
    test: 0,
    helloWorldShow: false
})
state.test = ref()
const handleChange = () => {
    state.test = Math.random()*20;
    if (state.test > 10) {
        state.helloWorldShow = true
    } else {
        state.helloWorldShow = false
    }
}

</script>

<template>
    <div>
        <h1>{{ state.test }}</h1>
            <el-button @click="handleChange">click</el-button>
            <hr>
        <HelloWorld v-if="state.helloWorldShow" msg="Hello Vue 3 + Vite" />
    </div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
</style>
