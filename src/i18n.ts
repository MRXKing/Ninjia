import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zh from './locales/zh.json'

 
//引入的不同语言文件
const messages = {
  en, zh
}
 
//这个类型可以自己配置，毕竟每个人做的都不一样
const i18n:any =createI18n( {
  legacy: false,         // 使用 Composition API 模式，则需要将其设置为false
  globalInjection: true, //全局生效$t
  locale:'zh',          // 默认cn翻译
  messages               //ES6解构
})
 
export default i18n