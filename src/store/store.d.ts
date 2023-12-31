import {  StoreWithActions } from 'pinia';



export interface SoundState {
    word:string
    inputWord:boolean
    wordVoice:boolean
    convRomaji:boolean
    convTokenize:boolean
    BaiduTranslate:boolean
}


export interface SoundActions{ //暂时用继承定义store的actions类型，兼容this不存在属性的问题

}

export type UseSoundStore = StoreWithActions<SoundState, SoundActions>;


export interface I18nState {
    locale:string
}

export interface I18nActions {
    switchLocale(lang:string):void
}

export type UseI18nStore = StoreWithActions<I18nState, I18nActions>;