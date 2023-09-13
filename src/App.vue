<script setup lang="ts">
import sound from './components/sound/index.vue'
import {gojyuon,voicedSound,semivoicedSound,contractedSound,} from './components/sound/index'
</script>

<template>
    <div class="wrapper">
        <div class="grid">

        </div>
        <div class="grid grid-flow-row-dense grid-cols-2">
            <div class="pronunciation">
                <sound :data="gojyuon" title="清音" ></sound>
                <sound :data="voicedSound" title="浊音" ></sound>
                <sound :data="semivoicedSound" title="半浊音" ></sound>
                <sound :data="contractedSound" title="拗音" ></sound>
            </div>
            <div class="translation">
                
            </div>
        </div>
    </div>
</template>

<style  lang="sass">
.wrapper 
    display: flex
    height: 100vh
    width: 100%
    flex-direction: column
    
    
</style>
