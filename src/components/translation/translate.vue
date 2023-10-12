<template>
    <div class="overflow-x-auto mt-2">
        <label class="label">
            <span class="label-text">{{$t("translate")}}</span>
        </label>
        <span class="pl-1" >{{summary }}</span>
    </div>
</template>

<script setup lang="ts">
import { watchEffect,ref } from 'vue';
import { BaiduTranslate } from './translate/translationService';
import type { BaiduParms } from './translate/BaiduAPI';
import { storeToRefs } from 'pinia'
import { userI18nStore } from "@/store/index";
import type { UseI18nStore } from "@/store/store"
const props = withDefaults(defineProps<{
    kanji:string
}>(),{
    kanji :''
})
const summary = ref<string>("")

const i18nStore: UseI18nStore = userI18nStore()

const { locale } = storeToRefs(i18nStore)

watchEffect(async ()=>{
    let params:BaiduParms = {
        q:props.kanji,
        from:"jp",
        to:locale.value
    }
    const res = await BaiduTranslate(params)
    summary.value=res.trans_result[0].dst
})
</script>

<style lang="sass">

</style>

