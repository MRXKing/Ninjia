import { defineStore  } from 'pinia';
import type { SoundState,I18nState } from './store';
import i18n from '@/i18n';

export const useSoundStore = defineStore('sound',{
    state:():SoundState =>({
        word:"すもももももももものうち",
        inputWord:true,
        wordVoice:true,
        convRomaji:true,
        convTokenize:true,
        BaiduTranslate:true
    }),

    persist:true
})


export const userI18nStore = defineStore('i18n',{
    state: function ():I18nState {
        let lang = localStorage.getItem('i18n')
        const locale = lang ? JSON.parse(localStorage.getItem('i18n') as string).locale : 'zh'
        i18n.global.locale.value = locale
        return {
            locale
        }
    },

    actions: {
        switchLocale(lang:string){
            i18n.global.locale.value = lang
            this.locale = lang
        }
    },
    persist:true
})
