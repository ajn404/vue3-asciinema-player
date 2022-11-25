

<script setup name="player">
import * as AsciinemaPlayer from 'asciinema-player';
import 'asciinema-player/dist/bundle/asciinema-player.css'
import { nextTick, ref } from 'vue'
const player = ref(null)
const themeList = ["asciinema","monokai","tango","solarized-dark","solarized-light"];//所有的主题
const theme = themeList[Math.floor(Math.random()*10%themeList.length)]

const props =defineProps({
    file:String,//请求地址或者压缩cast文件
    loop:Boolean,//是否循环
    theme:String,
})
nextTick(() => {
    AsciinemaPlayer.create(props.file||'https://asciinema.org/a/332602.cast?dl=1', player.value,
        {
            loop: props.loop??false,
            theme: props.theme??theme,
        });
});
</script>

<template>
    <div class="player-box">
        <div ref="player" class="player"></div>
    </div>
</template>

<style scoped>
.player :deep(.asciinema-terminal){
    max-width: calc(100% - 3rem - 1.5em);  
}
.player :deep(.asciinema-terminal) span{
        max-width: 100%;
}
</style>