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

Ninjia Project is website for Japanese Fifty Tone, Hiragana, Roman Pronunciation, Word Meaning Conversion

*Read this in other languages: [English](README.md), [简体中文](README.zh-cn.md)

## Support

- Chinese translation
  
  - [x] Baidu
  
  - [ ] Google
  
  - [ ] Youdao

- Romanic sound & convert

- Kanji tokenize

## Preview

demo website [here](https://mrxking.github.io/Ninjia/).

You can see  the configuration bar in the upper right corner

## Usage

### Baidu Translation plugin

[translationService.ts](https://github.com/MRXKing/Ninjia/blob/main/src/components/translation/translate/translationService.ts)

```ts
const BaiduSecertKey:string = ""  //Create your app  from Baidu Open Platform  to get key
const BaiduAppID:string = ""
```

## Steps

### Install

Install dependent  with npm  or other package

```sh
npm install 
```

### Run Web Server

```sh
vite
```

### Build

```sh
npm run build
```

## Dependencies Project

[kuroshiro](https://github.com/hexenq/kuroshiro)

[kuromoji.js](https://github.com/takuyaa/kuromoji.js)
