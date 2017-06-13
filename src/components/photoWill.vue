<template>
<div class="photoWill" v-show="showFlg">
    <h4>
        <!-- <i class="fa fa-reply" aria-hidden="true" @click="back"></i> -->
        <i class="fa fa-chevron-circle-left" aria-hidden="true" @click="back"></i>
        <!-- <i class="fa fa-reply-all" aria-hidden="true"></i> -->
        选择图片 {{ showFlg }}
    </h4>
    <div class="imgs">
        <div :class="{ 'active': selectedUrl === img }" v-for="(img, index) in imgs" @click="selectImg(img)">
            <img class="bg" src="../assets/square.jpg" alt="">
            <img :src="img" alt="">
        </div>
    </div>
    <div class="bottom">
        <button :disabled="selectedUrl === ''" @click="confirm">确定</button>
    </div>
</div>
</template>
<style lang="less">
@pink: #FF6878;
.photoWill {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    h4 {
        margin: 0;
        padding: 0.14rem;
        font-size: 0.14rem;
        text-align: center;
        background: black;
        position: fixed;
        width: 100%;
        box-sizing: border-box;
        top: 0;
        left: 0;
        z-index: 2;
        // background: rgba(0, 0, 0, 0.85);
        .fa {
            float: left;
            position: relative;
            top: 0.02rem;
            left: .02rem;
        }
    }
    .imgs {
        margin-top: 0.42rem;
        &:after {
            content: '';
            display: block;
            clear: both;
        }
        > div {
            float: left;
            width: 33.33333%;
            // width: 50%;
            position: relative;
            overflow: hidden;
            img.bg {
                width: 100%;
                position: relative;
                vertical-align: top;
            }
            img {
                position: absolute;
                width: 100%;
                top: 0;
                left: 0;
            }
            &.active:after {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                border: solid red 4px;
            }
        }
    }
    .bottom {
        position: fixed;
        bottom: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.85);
        text-align: center;
        padding: 0.10rem;
        button {
            padding: 0.06rem;
            color: white;
            border: solid 0.01rem transparent;
            background: @pink;
            border-radius: 0.04rem;
            width: 1rem;
            cursor: pointer;
            &:disabled {
                background: #888;
            }
        }
    }
}
</style>
<script>
export default {
    name: '',
    props: {
        show: {
            type: Boolean,
            default: true
        },
        imgs: {
            type: Array,
            default: function () {
                return [
                    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1886951565,480962095&fm=26&gp=0.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496202371&di=d7f3f5795a8184bdc00957d60403dd3c&imgtype=jpg&er=1&src=http%3A%2F%2Fpic18.nipic.com%2F20111231%2F3048013_164022089376_2.jpg',
                    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1279611579,2345725698&fm=26&gp=0.jpg',
                    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=414623249,873619310&fm=21&gp=0.jpg',
                    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=403599535,3209329892&fm=26&gp=0.jpg',
                    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1886951565,480962095&fm=26&gp=0.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496202371&di=d7f3f5795a8184bdc00957d60403dd3c&imgtype=jpg&er=1&src=http%3A%2F%2Fpic18.nipic.com%2F20111231%2F3048013_164022089376_2.jpg',
                    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1279611579,2345725698&fm=26&gp=0.jpg',
                    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=414623249,873619310&fm=21&gp=0.jpg',
                    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=403599535,3209329892&fm=26&gp=0.jpg',
                    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1886951565,480962095&fm=26&gp=0.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496202371&di=d7f3f5795a8184bdc00957d60403dd3c&imgtype=jpg&er=1&src=http%3A%2F%2Fpic18.nipic.com%2F20111231%2F3048013_164022089376_2.jpg',
                    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1279611579,2345725698&fm=26&gp=0.jpg',
                    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=414623249,873619310&fm=21&gp=0.jpg',
                    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=403599535,3209329892&fm=26&gp=0.jpg',
                ]
            }
        }
    },
    data: function () {
        return {
            selectedUrl: '',
            showFlg: this.show
        }
    },
    watch: {
        show (newVal) {
            this.showFlg = this.show
        }
    },
    methods: {
        selectImg (imgUrl) {
            this.selectedUrl = imgUrl
        },
        back () {
            this.showFlg = false
        },
        confirm () {
            this.$emit('input', this.selectedUrl)
            this.$emit('on-change', this.selectedUrl)
            this.showFlg = false
        }
    },
    mounted: function () {
    
    }
}
</script>