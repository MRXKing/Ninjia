# Ninjia

<a href="https://github.com/vuejs/core" target="_blank">
    <img src="https://img.shields.io/badge/vue-3.3.4-brightgreen.svg" alt="vue3">
 </a>
<a href="https://github.com/saadeghi/daisyui" target="_blank">
    <img src="https://img.shields.io/badge/daisyui-3.9.2-black.svg" alt="daisyui">
</a>
 <a href="https://github.com/tailwindlabs/tailwindcss" target="_blank">
    <img src="https://img.shields.io/badge/tailwindcss-3.3.3-blue.svg" alt="tailwindcss">
 </a>
 <a href="https://github.com/vuejs/pinia" target="_blank">
    <img src="https://img.shields.io/badge/pinia-2.1.6-yellow.svg" alt="pinia">
 </a>

忍者 日语五十音,平片假名、罗马音、词义转换web网站

*其他说明语言: [English](README.md), [简体中文](README.zh-cn.md)

## 支持

- 翻译
  
  - [x] 百度
  
  - [ ] 谷歌
  
  - [ ] 有道

- 罗马音 以及 转罗马音功能

- 汉字标记

## 预览

demo website [here](https://mrxking.github.io/Ninjia/).

请查看右上角的配置栏

## 使用

### 百度翻译插件

[translationService.ts](https://github.com/MRXKing/Ninjia/blob/main/src/components/translation/translate/translationService.ts)

```ts
const BaiduSecertKey:string = ""  //百度开放平台创建免费应用获取key
const BaiduAppID:string = ""
```

## 步骤

### 安装

使用Npm或其他包管理器安装依赖

```sh
npm install 
```

### 启动web服务器

```sh
vite
```

### 构建项目

```sh
npm run build
```

## 参考项目

[kuroshiro](https://github.com/hexenq/kuroshiro)

[kuromoji.js](https://github.com/takuyaa/kuromoji.js)
