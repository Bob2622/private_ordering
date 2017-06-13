<template>
<div class="edit-info clear">
    <h3>输入我的信息</h3>
    <div class="clear">
        <input type="text" class="fl" placeholder="输入我的手机" v-model="myPhoneNum">
        <button class="valication-code fr" @click="sendMsg" v-show="sending == false">发送短信验证码</button>
        <button class="valication-code fr" v-show="sending == true">重新发送({{ cntDown }})</button> <br>
    </div>
    <span class="tip fl">(隐私相关: 手机号将作为投放依据)</span>
    <div>
        <input type="text" class="valication-code-info fl" placeholder="请输入短信验证码" v-model="secuCode">
    </div>
    <button class="commit" @click="commit">确定</button>
</div>
</template>
<style lang="less" scoped>
@import '~less/common/index.less';
.edit-info {
    background: white;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
    h3  {
        font-size: 0.16rem;
        color: black;
        font-weight: normal;
        margin-top: 0.30rem;
        margin-bottom: 0.40rem;
    }
    input {
        height: 0.29rem;
        line-height: 0.29rem;
        border: none;
        border-bottom: solid 0.01rem #DAE1E6;
        font-size: 0.13rem;
        width: 1.6rem;
        padding: 0;
        padding-left: 0.08rem;
        box-sizing: border-box;
        color: inherit;
        &::-webkit-input-placeholder {
            color: #A0AAB2;
        }
    }
    .tip {
        margin-top: 0.08rem;
        margin-left: 0.08rem;
    }
    .valication-code {
        background: #DAE1E6;
        border: none;
        border-radius: 0.10rem;
        width: 1.05rem;
        color: white;
        height: 0.30rem;
        line-height: 0.30rem;
        padding: 0;
    }
    .valication-code-info {
        margin-top: 0.20rem;
        width: 100%;
    }
    .commit {
        height: 0.30rem;
        line-height: 0.28rem;
        margin-top: 0.22rem;
        width: 100%;
        border: none;
        border-radius: 0.10rem;
        color: white;
        background: #FF6878;
    }
}
</style>
<script>
import Axios from 'axios'
export default {
    name: 'editInfo',
    data: function () {
        return {
            myPhoneNum: '',
            secuCode: '',

            sending: false, // 是否正在发送验证码
            cntDown: 60,

            to: this.$route.query.to,
            by: this.$route.query.by,
            msg: this.$route.query.msg,
            tmpId: this.$route.query.tmpId,
            imgBgUrl: this.$route.query.imgBgUrl,
            phoneNum: this.$route.query.phoneNum,
        }
    },
    methods: {
        sendMsg () {
            this.sending = true
            this.countDown()
        },
        countDown () {
            let vue = this
            let interval = setInterval(function(){
                vue.cntDown--
                if (vue.cntDown == 0) {
                    clearInterval(interval)
                    vue.sending = false
                    vue.cntDown = 60
                }
            }, 1000)
        },
        commit () {
            // Axios({
            //     url: '',
            //     method: 'get',
            //     data: { secuCode: this.secuCode }
            // }).then(function(response){

            // })
            // 
            this.$router.push({
                path: '/preview',
                query: {
                    to: this.to,
                    by: this.by,
                    msg: this.msg,
                    tmpId: this.tmpId,
                    phoneNum: this.phoneNum,
                    imgBgUrl: this.imgBgUrl,
                }
            })
        }
    },
    mounted: function () {
    }
}
</script>