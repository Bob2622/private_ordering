<template>
<div class="template" id="test">
    <img src="../assets/tmp-bg-1.jpg" alt="">
    <div class="top-bg">
        <img class="btn-picture" src="../assets/btn-picture.png" alt="">
        <img class="btn-my-pictures" src="../assets/btn-my-pictures.png" alt="">
    </div>
    <div :class="[ tmpId == 1 ? 'tmp1' : '', tmpId == 2 ? 'tmp2' : '', tmpId == 3 ? 'tmp3' : '' ]">
        <span class="text-to">To</span>
        <span class="text-recipient">{{ to }}</span>
        <span class="text-content">{{ msg }}</span>
        <div class="text-from-msgs">
            <span class="text-by">By</span>
            <span class="text-from">{{ by }}</span>
        </div>
    </div>
</div>
</template>
<style lang="less" scoped>
.template {
    background: white;
    position: relative;
    // height: 4.62rem;
    .top-bg {
        height: 2.80rem;
        box-sizing: border-box;
        border: dashed 0.01rem red;
        z-index: 1;
        position: relative;
        background: #F4F5F6;
        text-align: center;
        .btn-picture, .btn-my-pictures {
            width: 0.90rem;
            margin-top: 0.85rem;
        }
        .btn-picture {
            margin-right: 0.2rem;
        }
    }
    > img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
}
.tmp1 {
    font-size: 0.14rem;
    position: relative;
    z-index: 1;
    padding: 0.40rem 0.30rem;
    height: 2.1rem;
    text-align: left;
    position: relative;
    .text-to, .text-content, .text-by, .text-recipient {
        color: #FF6878;
    }
    .text-content {
        width: 0.80rem;
        float: right;
        line-height: 1.5;
        text-align: left;
        word-break: break-all;
    }
    .text-by {
        position: absolute;
        bottom: 0.50rem;
        right: 0.97rem;
    }
    .text-from {
        position: absolute;
        bottom: 0.50rem;
        right: 0.30rem;
    }
}
.tmp2 {
    font-size: 0.12rem;
    position: relative;
    z-index: 1;
    padding: 0.25rem 0.30rem;
    height: 1.62rem;
    background: #1F1F1F;
    text-align: left;
    .text-to, .text-recipient {
        color: white;
    }
    .text-content, .text-by, {
        color: #FF6878;
    }
    .text-content {
        display: block;
        margin-top: 0.15rem;
        float: right;
        line-height: 1.5;
        text-align: left;
    }
    .text-from-msgs {
        text-align: center;
        position: absolute;
        bottom: 0.30rem;
        text-align: center;
        width: 100%;
        margin-left: -0.3rem;
    }
}
.tmp3 {
    font-size: 0.12rem;
    position: relative;
    z-index: 1;
    padding: 0.25rem 0.30rem;
    height: 1.62rem;
    background: #FF6878;
    text-align: center;
    .text-to, .text-recipient, .text-content, .text-by, .text-from {
        color: white;
    }
    .text-content {
        display: block;
        margin-top: 0.15rem;
        float: right;
        line-height: 1.5;
        text-align: left;
    }
    .text-from-msgs {
        text-align: center;
        position: absolute;
        bottom: 0.30rem;
        text-align: center;
        width: 100%;
        margin-left: -0.3rem;
    }
}
.next {
    background: white;
    padding: 0.12rem 0.20rem 0.25rem 0.20rem;
    margin-top: 0.16rem;
    button {
        background: #FF6878;
        padding: 0.10rem 0;
        border: solid 0.01rem transparent;
        border-radius: 0.10rem;
        width: 100%;
        color: white;
        font-weight: bolder;
        font-size: 0.14rem;
        outline: none;
    }
}
</style>
<script>
export default {
    name: 'tmp1',
    data: function () {
        return {
            to: this.$route.query.to || 'vanny',
            by: this.$route.query.by || 'lalal',
            msg: this.$route.query.msg || '嫁给我你一定是世界上第二幸福的人, 因为第一幸福的人是我！',
            tmpId: this.$route.query.tmpId || 1,
        }
    },
    methods: {
        next () {
            this.$router.push({
                path: '/editInfo'
            })
        }
    },
    mounted: function () {
    }
}
</script>