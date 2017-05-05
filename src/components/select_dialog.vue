<template>
<div class="select-dialog" @click="hideOptions">
    <div class="custm-select">
        <span>{{ label }}</span> 
        <div @click.stop="isSelecting = true" v-if="selectedOption == ''">{{ placeholder }}</div>
        <div @click.stop="isSelecting = true" v-else>{{ selectedOption }}</div>
    </div>
    <div class="cover" v-show="isSelecting">
        <div class="detail" @click.stop="">
            <input type="text" placeholder="自行输入"  v-model="customValue" @change="selectOption(customValue)">
            <div class="example-text" v-for="(option, index) in options" @click="selectOption(option)">
                {{ option }}
            </div>
        </div>
    </div>
</div>

</template>
<style lang="less" scoped>
@import '../less/common/index.less';
.select-dialog {
    .cover {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.2);
        font-size: 0.12rem;
        z-index: 10;
        .detail {
            position: absolute;
            bottom: 0;
            left: 0.05rem;
            right: 0.05rem;
            background: white;
            padding: 0.15rem;
            input, .example-text {
                padding: 0.15rem 0.30rem;
                background: #F8F9FA;
                border: solid 0.01rem #A0AAB2;
                border-radius: 0.10rem;
                margin-bottom: 0.05rem;
                text-align: left;
            }
            input {
                color: #FF6878;
                text-align: center;
                outline: none;
                padding: 0.10rem 0.20rem;
                display: block;
                width: 85%;
                &::-webkit-input-placeholder {
                    color: #FF6878;
                }
            }
        }
    }
    .custm-select {
        font-size: 0.12rem;
        position: relative;
        border: solid 1px transparent;
        span {
            position: absolute;
            left: 0;
            top: 0.06rem;
        }
        div {
            margin-left: 0.38rem;
            padding: 0 0.12rem;
            border: solid 0.01rem #A0AAB2;
            border-radius: 0.24rem;
            height: 0.24rem;
            line-height: 0.25rem;
            margin-bottom: 0.20rem;
            background: #F8F9FA;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>
<script>
export default {
    name: 'selectDialog',
    props: {
        label: String,
        placeholder: String,
        options: {
            type: Array,
            default: function () {
                return []
            }
        }
    },
    data: function () {
        return {
            customValue: '',
            isSelecting: false,
            selectedOption: ''
        }
    },
    methods: {
        hideOptions () {
            this.isSelecting = false
        },
        selectOption (value) {
            this.selectedOption = value
            this.isSelecting = false
        }
    },
    mounted: function () {
    }
}
</script>