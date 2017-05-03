<template>
<div id="app">
    <router-view></router-view>
</div>
</template>

<script>
import '@/libs/font-size-adjust'
export default {
    name: 'app',
    mounted () {
    }
}
</script>

<style lang="less">
@import './less/common/index';
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #A0AAB2;
    background: #F8F9FA;
    font-size: 0.12rem;
}
</style>
