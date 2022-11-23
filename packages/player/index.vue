

<script setup name="player">
import * as AsciinemaPlayer from 'asciinema-player';
import 'asciinema-player/dist/bundle/asciinema-player.css'
import { nextTick, ref } from 'vue'
const player = ref(null)
const themeList = ["asciinema","monokai","tango","solarized-dark","solarized-light"];//所有的主题
const theme = themeList[Math.floor(Math.random()*10%themeList.length)]

const props =defineProps({
    file:String,
    loop:Boolean
})
nextTick(() => {
    AsciinemaPlayer.create(file||'data:text/plain;base64,eyJ2ZXJzaW9uIjogMiwgIndpZHRoIjogODAsICJoZWlnaHQiOiAyNH0KWzAuMSwgIm8iLCAiaGVsbCJdClswLjUsICJvIiwgIm8gIl0KWzIuNSwgIm8iLCAid29ybGQhXG5cciJdCg==', player.value,
        {
            loop: props.loop??false,
            theme: theme
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