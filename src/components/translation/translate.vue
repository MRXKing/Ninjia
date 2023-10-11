<template>
    <div class="overflow-x-auto mt-2">
        <label class="label">
            <span class="label-text">翻译</span>
        </label>
        <span class="pl-1" >{{summary }}</span>
    </div>
</template>

<script setup lang="ts">
import { watchEffect,ref } from 'vue';
import { BaiduTranslate } from './translate/translationService';
import type { BaiduParms } from './translate/BaiduAPI';
const props = withDefaults(defineProps<{
    kanji:string
}>(),{
    kanji :''
})

const summary = ref<string>("")

watchEffect(async ()=>{
    let params:BaiduParms = {
        q:props.kanji,
        from:"jp",
        to:'zh'
    }
    const res = await BaiduTranslate(params)
    summary.value=res.trans_result[0].dst
})
</script>

<style lang="sass">

</style>

