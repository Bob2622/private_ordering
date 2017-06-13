
<template>
<div class="preview">
    <tmp1 :to="to" :by="by" :msg="msg" :tmp-id="tmpId" v-model="imgBgUrl" :phone-num="phoneNum"></tmp1>
</div>
</template>
<style lang="less">
</style>
<script>
import tmp1 from 'components/tmp1'
export default {
    name: '',
    data: function () {
        return {
            to: this.$route.query.to,
            by: this.$route.query.by,
            msg: this.$route.query.msg,
            tmpId: this.$route.query.tmpId*1,
            imgBgUrl: this.$route.query.imgBgUrl,
            phoneNum: this.$route.query.phoneNum,
        }
    },
    components: { tmp1 },
    methods: {
    },
    mounted: function () {
    }
}
</script>