<script setup lang="ts">
import { onMounted } from 'vue'
import { themeChange } from 'theme-change'
import sound from './components/sound/index.vue'
import { gojyuon, voicedSound, semivoicedSound, contractedSound } from './components/sound/index'
import navbar from './components/navbar/nav.vue'
import translation from './components/translation/index.vue'

onMounted(() => {
    themeChange(false)
})
</script>

<template>
    <div class="wrapper">
        <navbar></navbar>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full grid-auto-rows-auto">
            <div class="w-full">
                <div class="md:w-[50vw] md:fixed translation ">
                    <translation></translation>
                </div>
            </div>
            <div class="py-[5px] lg:px-[15px] p-0">
                <sound :data="gojyuon" title="清音"></sound>
                <sound :data="voicedSound" title="浊音"></sound>
                <sound :data="semivoicedSound" title="半浊音"></sound>
                <sound :data="contractedSound" title="拗音"></sound>
            </div>
            
        </div>
    </div>
</template>

<style lang="sass">
*
    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,apple color emoji,segoe ui emoji,Segoe UI Symbol,noto color emoji

html,body
    width: 100%
    height: 100%
.wrapper 
    display: flex
    min-height: 100vh
    width: 100%
    flex-direction: column
.translation
    padding: 10px 15px
</style>
