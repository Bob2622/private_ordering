<template>
<div class="template">
    <!-- <div class="tmp">
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
    </div> -->
    <tmp1 :to="to" :by="by" :msg="msg" :tmp-id="tmpId" :phone-num="phoneNum" v-model="imgBgUrl"></tmp1>
    <div class="next" @click="next">
        <button>下一步</button>
    </div>
</div>
</template>
<style lang="less" scoped>
.template {
    padding-top: 0.15rem;
    .tmp {
        margin: 0 0.30rem;
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
}
</style>
<script>
import tmp1 from 'components/tmp1'
export default {
    name: 'template',
    data: function () {
        return {
            to: this.$route.query.to,
            by: this.$route.query.by,
            msg: this.$route.query.msg,
            tmpId: this.$route.query.tmpId*1,
            phoneNum: this.$route.query.phoneNum,
            imgBgUrl: ''
        }
    },
    components: { tmp1 },
    methods: {
        next () {
            this.$router.push({
                path: '/editInfo',
                query: {
                    to: this.to,
                    by: this.by,
                    msg: this.msg,
                    tmpId: this.tmpId,
                    imgBgUrl: this.imgBgUrl,
                    phoneNum: this.phoneNum,
                }
            })
        }
    },
    mounted: function () {
    }
}
</script>