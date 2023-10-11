<template>
    <transition name="message" @before-leave="onClose" @after-leave="destroy">
        <div ref="messageRef" :id="id"  v-show="visible" :class="['alert',alertType,'fixed','top-0']" :style="Style">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    :d="icon[type]" />
            </svg>
            <span>{{ message }}</span>
        </div>
    </transition>
</template>

<script setup lang='ts'>
import {  computed, ref, onMounted} from 'vue'
import type { IMessageProps } from './type'
import { useResizeObserver } from '@vueuse/core'
import {getLastOffset} from './instance'

const height = ref<Number>(0);
const messageRef = ref();
const props = withDefaults(defineProps<IMessageProps>(), {
    type: 'info',
    id:"",
    duration: 3000,
    message: '',
    offset: 16,
    zIndex:0,
    onDestroy: () => { },
    onClose: () => { },
})

const lastOffset = computed(() => getLastOffset(props.id));
const offset = computed(() => props.offset + lastOffset.value);
const bottom = computed(() => height.value + offset.value);

const Style = computed(() => ({
    top: `${offset.value}px`,
    zIndex: props.zIndex
}))



const alertType = computed(() => { //tailwindcss要预编译类名,一定要这么写
    let tp = props.type
    if(tp == "error"){
        return "alert-error"
    }else if(tp == "warning"){
        return "alert-warning"
    }else if(tp == "success"){
        return "alert-success"
    }else {
        return "alert-info"
    }
})

const icon:any = {
    "info":"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    "error":"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
    "warning":"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    "success":"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
}

const visible = ref<boolean>(false)
onMounted(() => {
    startTimer()
    visible.value = true
})

function startTimer() {
    if (props.duration === 0) {
        return
    }
    setTimeout(() => {
        close()

    }, props.duration)
}

function destroy(){
    props.onDestroy()
}


function close() {
    visible.value = false
}

useResizeObserver(messageRef, () => {
      height.value = messageRef.value.getBoundingClientRect().height;
});

defineExpose({
    visible,
    bottom
})

</script>

<style lang="sass" scoped>
.message-enter-active,.message-leave-active 
    transition: opacity .3s, transform .4s, top .4s

.message-enter-from,.message-leave-to 
    opacity: 0

[id^="message_"]
    transition: opacity .3s, transform .4s, top .4s

</style>