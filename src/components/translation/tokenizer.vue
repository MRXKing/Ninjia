<template>
    <div class="overflow-x-auto mt-2 ">
        <label class="label">
            <span class="label-text">{{$t("tokenize")}}</span>
        </label>
        <table class="table">
            <thead>
                <tr>
                    <th v-for="tkCol in tkColums">{{ tkCol }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tk in data">
                    <td>{{tk.surface_form }}</td>
                    <td>{{tk.pos }}</td>
                    <td>{{tk.pos_detail_1 }}</td>
                    <td>{{tk.pos_detail_2 }}</td>
                    <td>{{tk.pos_detail_3 }}</td>
                    <td>{{tk.conjugated_type }}</td>
                    <td>{{tk.conjugated_form }}</td>
                    <td>{{tk.basic_form }}</td>
                    <td>{{tk.reading }}</td>
                    <td>{{tk.pronunciation }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref,watchEffect } from 'vue';
import { tokenize } from './analyzer/parse';
const props = withDefaults(defineProps<{
    moji:string
}>(),{
    moji :''
})

const data = ref<tokenize[] | undefined>([]);
watchEffect(async ()=>{
    data.value = await tokenize(props.moji)
})

const tkColums:string[] = [
    "表層形",
    "品詞",
    "品詞細分類1",
    "品詞細分類2",
    "品詞細分類3",
    "活用型",
    "活用形",
    "基本形",
    "読み",
    "発音"
]
</script>

<style lang="sass" scoped>
th,td 
    border: 1px solid hsl(var(--bc)/0.03) !important
    text-align: center
</style>