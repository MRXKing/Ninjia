<template>
    <div class="w-full ">
        <div class="form-control">
            <label class="label">
                <span class="label-text">词义转换器</span>
            </label>
            <input type="text" v-model="word" placeholder="Type here" class="input input-bordered w-full" />
        </div>
        <romaji v-if="convRomaji" :moji="word"></romaji>
        <translate v-if="BaiduTranslate" :kanji="word"></translate>
        <tokenizer v-if="convTokenize" :moji="word"></tokenizer>
    </div>
</template>


<script setup lang="ts">
import tokenizer from './tokenizer.vue'
import romaji from './romaji.vue'
import translate from './translate.vue'
import { storeToRefs } from 'pinia';
import { useSoundStore } from "@/store/sound";
import type {UseSoundStore} from "@/store/store"


const soundStore:UseSoundStore = useSoundStore()

const { word,convRomaji,convTokenize,BaiduTranslate } = storeToRefs(soundStore)
</script>