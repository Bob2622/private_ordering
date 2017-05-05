<template>
<div class="tmp-choose">
    <div class="detail">
        <h4>模板选择</h4>
        <div class="tmps">
            <div class="clear">
                <div class="tmp" @click="tmpId = 1">
                    <img src="../assets/tmp1.jpg" alt="">
                    <i :class="['fa', 'fa-check-circle', tmpId == 1 ? 'checked' : '']" aria-hidden="true"></i>
                </div>
                <div class="tmp" @click="tmpId = 2">
                    <img src="../assets/tmp2.jpg" alt="">
                    <i :class="['fa', 'fa-check-circle', tmpId == 2 ? 'checked' : '']" aria-hidden="true"></i>
                </div>
                <div class="tmp" @click="tmpId = 3">
                    <img src="../assets/tmp3.jpg" alt="">
                    <i :class="['fa', 'fa-check-circle', tmpId == 3 ? 'checked' : '']" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <select-dialog :label="'TO'" :placeholder="'选择'" :options="options"></select-dialog>
        <select-dialog :label="'BY'" :placeholder="'选择'" :options="options"></select-dialog>
        <select-dialog :label="'祝福'" :placeholder="'选择'" :options="options"></select-dialog>
    </div>
    <div class="bottom">
        <button>上一步</button>
        <button>下一步</button>
    </div>
</div>
</template>
<style lang="less" scoped>
.tmp-choose {
    background: #F8F9FA;
    color: #A0AAB2;
    .detail {
        padding: 0 0.15rem;
        background: white;
        h4 {
            margin: 0;
            padding: 0.15rem 0 0.20rem 0;
            text-align: left;
        }
        .tmps {
            margin-bottom: 0.20rem;
            overflow: scroll;
            &::-webkit-scrollbar{ 
                width: 0;
                height: 0;
            }
            > div {
                white-space: nowrap;
            }
            .tmp {
                text-align: left;
                vertical-align: top;
                width: 1.60rem;
                position: relative;
                margin-right: 0.20rem;
                display: inline-block;
                padding-bottom: 0.05rem;
                &:last-child {
                    margin-right: 0;
                }
                img {
                    width: 100%;
                }
                .fa-check-circle {
                    font-size: 0.14rem;
                    position: absolute;
                    top: 0.10rem;
                    right: 0.08rem;
                    &.checked {
                        color: #FF6878;
                    }
                }
            }
        }
    }
    .bottom {
        background: white;
        margin-top: 0.05rem;
        padding: 0.10rem 0.15rem 0.15rem 0.15rem;
        text-align: left;
        button {
            width: 1.4rem;
            height: 0.30rem;
            line-height: 0.28rem;
            border: none;
            border-radius: 0.15rem;
        }
        button:first-child {
            background: #A0AAB2;
            color: white;
        }
        button:last-child {
            float: right;
            background: #FF6878;
            color: white;
        }
    }
}
</style>
<script>
import selectDialog from '@/components/select_dialog'
export default {
    name: 'chooseTemplate',
    props: {
    },
    data: function () {
        return {
            options: [
                '嫁给我你一定是世界上第二幸福的人, 因为第一幸福的人是我！',
                '嫁给我你一定是世界上第二幸福的人, 因为第一幸福的人是我！',
                '嫁给我你一定是世界上第二幸福的人, 因为第一幸福的人是我！',
            ],
            tmpId: 2,
        }
    },
    components: { selectDialog },
    methods: {
    },
    mounted: function () {
    }
}
</script>