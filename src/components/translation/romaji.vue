<template>
    <div class="overflow-x-auto mt-2">
        <label class="label">
            <span class="label-text">罗马音</span>
        </label>
        <span class="pl-1 whitespace-nowrap" v-html="romaji"></span>
    </div>
</template>

<script setup lang="ts">
import { ref,watchEffect } from 'vue';
import { convert } from './analyzer/parse'
const props = withDefaults(defineProps<{
    moji:string
}>(),{
    moji :''
})

const romaji = ref<string>()

watchEffect(async ()=>{
    romaji.value = await convert(props.moji)
})
</script>

<style lang="sass">
span
    rt
        margin-right: 5px
</style>

./analyzer/kuroshiro