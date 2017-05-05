<template>
<div class="template">
    <div class="tmp">
        <img src="../assets/tmp-bg-1.jpg" alt="">
        <div class="top-bg">
            <img class="btn-picture" src="../assets/btn-picture.png" alt="">
            <img class="btn-my-pictures" src="../assets/btn-my-pictures.png" alt="">
        </div>
        <div class="tmp1">
            <span class="text-to">To</span>
            <span class="text-recipient">秀秀</span>
            <span class="text-content">嫁给我一定是世界上第二幸福的人, 因为第一幸福的认识我!</span>
            <div class="text-from-msgs">
                <span class="text-by">By</span>
                <span class="text-from">你的小帅帅</span>
            </div>
        </div>
    </div>
    <div class="next">
        <button>下一步</button>
    </div>
</div>
</template>
<style lang="less" scoped>
.template {
    padding-top: 0.15rem;
}
.tmp {
    margin: 0 0.30rem;
    background: white;
    position: relative;
    height: 4.62rem;
    .top-bg {
        height: 2.50rem;
        box-sizing: border-box;
        border: dashed 0.01rem red;
        z-index: 1;
        position: relative;
        background: #F4F5F6;
        .btn-picture, .btn-my-pictures {
            width: 0.90rem;
            margin-top: 0.70rem;
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
    font-size: 0.12rem;
    position: relative;
    z-index: 1;
    padding: 0.25rem 0.30rem;
    height: 1.62rem;
    text-align: left;
    .text-to, .text-content, .text-by, .text-recipient {
        color: #FF6878;
    }
    .text-content {
        width: 0.80rem;
        float: right;
        line-height: 1.5;
        text-align: left;
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
    name: 'template',
    props: {

    },
    data: function () {
        return {

        }
    },
    methods: {

    },
    mounted: function () {
    }
}
</script>