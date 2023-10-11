<script setup lang="ts">
import Sound from './index';
import { ref, getCurrentInstance, reactive } from 'vue'
import { storeToRefs } from 'pinia';
import { useSoundStore } from "@/store/sound";
import type { UseSoundStore } from "@/store/store"

const soundStore: UseSoundStore = useSoundStore()

const { word, inputWord, wordVoice } = storeToRefs(soundStore);

defineProps<{
    data: Array<Array<Sound>>,
    title: string
}>()

const instance = getCurrentInstance() as any
const Romaji = ref<Sound | null>(null)

interface Lock {
    locked: boolean;
}

const audio = new Audio();
const lock = reactive<Lock>({
    locked: false
})
const isPlay = ref<Boolean>(false)
audio.addEventListener('canplaythrough', () => {
    audio.play();
    isPlay.value = true
});

audio.addEventListener('ended', () => {
    isPlay.value = false
    Romaji.value = null
});

function startVoiced(src: string) {
    isPlay.value = true
    return new Promise<Boolean>((resolve, reject) => {
        audio.src = src // 设置音频文件的 URL
        let startTime: Date = new Date()
        let timer = setInterval(() => {
            if (!isPlay.value) {
                clearInterval(timer)
                resolve(true)
            }
            let currentTime: Date = new Date()
            const timeDiff: number = currentTime.getTime() - startTime.getTime();
            const seconds: number = Math.floor(timeDiff / 1000);
            if (seconds > 2) {
                let errMsg: string = `load ${src} timeout`;
                instance.proxy.$message({
                    duration: 2000,
                    message: errMsg,
                    type: 'error',
                })
                audio.src = ""
                clearInterval(timer)
                reject(errMsg)
            }
        }, 500)
    })
}

async function soundClick(romaji: string | Array<Sound>,kanji?:string) {
    if (lock.locked) {
        return
    }
    lock.locked = true
    try {
        if (kanji && inputWord.value ) {
            word.value += kanji
        }
        if (wordVoice.value) {
            if (typeof romaji === 'string') {
                await startVoiced('./sound/' + romaji + '.m4a')
            } else if (Array.isArray(romaji)) {
                for (let index = 0; index < romaji.length; index++) {
                    try {
                        Romaji.value = romaji[index]
                        await startVoiced('./sound/' + romaji[index].Romaji + '.m4a')
                    } catch (error) {
                        console.log(error)
                        continue
                    }
                }
            }
        }
    } catch (error) {
        console.error(error)
    } finally {
        lock.locked = false
    }
}
</script>

<template>
    <div class="overflow-x-auto">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th :colspan="data[0].length * 3 + 1">{{ title }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>\</td>
                    <td @click="soundClick(data.filter(row => row[i]?.Romaji).map(row => row[i]))" v-for="v, i in data[0]"
                        :colspan="v.Colspan * 3">
                        {{ v.Hiragana }} / {{ v.Katakana }} 段
                    </td>
                </tr>
                <tr v-for="line in data">
                    <td @click="soundClick(line.filter(row => row?.Romaji).map(row => row))"> {{ line[0].Hiragana }} / {{
                        line[0].Katakana }} 行 </td>
                    <template v-for="sound in line">
                        <td v-if="!sound.Hiragana" :colspan="sound.Colspan * 3">\</td>
                        <td @click="soundClick(sound?.Romaji,sound?.Hiragana)" v-if="sound?.Hiragana" :colspan="sound.Colspan">{{
                            sound?.Hiragana
                        }}</td>
                        <td @click="soundClick(sound?.Romaji,sound?.Katakana)" v-if="sound?.Katakana" :colspan="sound.Colspan">{{
                            sound?.Katakana
                        }}</td>
                        <td @click="soundClick(sound?.Romaji)"
                            :class="{ 'hover': JSON.stringify(Romaji) == JSON.stringify(sound) }" v-if="sound?.Romaji"
                            :colspan="sound.Colspan">{{ sound?.Romaji }}
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="sass" scoped>
th,td 
    border: 1px solid hsl(var(--bc)/0.03) !important
    text-align: center
    
.table td:hover,.table td.hover 
    --tw-bg-opacity: 1
    cursor: pointer
    background-color: hsl(var(--b2) / var(--tw-bg-opacity))
</style>
