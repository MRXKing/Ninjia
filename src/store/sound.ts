import { defineStore  } from 'pinia';
import type { SoundState } from './store';


export const useSoundStore = defineStore('useSoundStore',{
    state:():SoundState =>({
        word:"すもももももももものうち",
        inputWord:true,
        wordVoice:true,
        convRomaji:true,
        convTokenize:true,
        BaiduTranslate:true
    }),

    actions: {
       
    },
    persist:true
})
