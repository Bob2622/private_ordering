<template>
<div class="index">
    <div class="head">
        <img src="../assets/5-20.png" alt="">
        <h5>活动介绍</h5>
        <p class="actity-detail">您可以在本次活动中为TA订制一个专属的应用开机画面（小米手机中的视频、音乐、主题等系统应用），给TA一个意想不到的惊喜。订制过程中, 用户可以上传自己的图片&祝福&昵称, 但是这部分内容需要经过内容审核。</p>
        <div class="protocal">
            <img class="phone" src="../assets/phone.png" alt="">
            <a href="">查看详情</a>
            <div>我已阅读相关协议<i class="fa fa-check-circle" aria-hidden="true"></i></div>
            <div>允许公开发表并分享你的祝福<i class="fa fa-check-circle" aria-hidden="true"></i></div>
        </div>
    </div>
    <div>
    </div>
</div>
</template>
<style lang="less" scoped>
.index {
    .head {
        padding: 0.4rem;
        img {
            width: 100%;
        }
        h5 {
            font-size: 0.14rem;
            margin-bottom: 0.12rem;
            margin-top: -0.25rem;
        }
        p {
            margin: 0;
        }
        .actity-detail {
            font-size: 0.12rem;
            line-height: 1.5;
        }
        .protocal {
            position: relative;
            background: white;
            margin: 1.3rem -0.40rem 0 -0.40rem;
            padding-top: 1.2rem;
            padding-bottom: 0.20rem;
            .phone {
                width: 1.10rem;
                margin-top: 0.25rem;
                margin-bottom: 0.25rem;
                margin-left: -0.55rem;
                position: absolute;
                top: -1.3rem;
                left: 50%;
                z-index: 2;
            }
            a {
                text-decoration: none;
                color: #0076FA;
            }
            > div {
                margin-top: 0.10rem;
            }
        }
        
    }
}
</style>
<script>
export default {
    name: '',
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