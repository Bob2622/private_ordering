
<template>
<div class="tmp">
    <img class="img-bg" v-if="tmpId === 1" src="../assets/tmp-bg-1.jpg" alt="">
    <img class="img-bg" v-if="tmpId === 2" src="../assets/tmp-bg-2.jpg" alt="">
    <img class="img-bg" v-if="tmpId === 3" src="../assets/tmp-bg-3.jpg" alt="">
    <div class="tmp-content">
        <div :class="[ file == '' ? 'border-dashed' : '', 'top-bg']" @click="toggleBgPicker">
            <img class="btn-picture" src="../assets/btn-picture.png" alt="" v-if="file == ''"
                 @click="change">
            <img class="btn-my-pictures" src="../assets/btn-my-pictures.png" alt=""   v-if="file == ''"
                 @click="openCamera($event)">
            <input type="file" name="image_file" accept="image/*" style="display: none;" @change="upImg($event)">
            <img :src="file" alt="" class="custom" v-if="file !== ''">
        </div>
        <div :class="[ tmpId == 1 ? 'tmp1' : '', tmpId == 2 ? 'tmp2' : '', tmpId == 3 ? 'tmp3' : '' ]">
            <span class="text-to">To</span>
            <span class="text-recipient">{{ to }}</span>
            <span class="text-content">{{ msg }}</span>
            <div class="text-from-msgs">
                <span class="text-by">By</span>
                <span class="text-from">{{ by }}</span>
            </div>
            <div class="text-phone">{{ phoneNum }}</div>
        </div>
    </div>
    <photo-will :show="photoWill" v-model="file"></photo-will>
</div>
</template>
<style lang="less">
@pink: #FF6878;
@grey: #ddd;
.tmp {
    position: relative;
    .border-dashed {
        border: dashed 1px @pink;
    }
    .img-bg {
        width: 100%;
        vertical-align: top;
    }
    .tmp-content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .top-bg {
            height: 50%;
            text-align: center;
            display: flex;
            display: -webkit-flex;
            justify-content: center;
            align-items: center;
            background: #F8F9FA;
            box-sizing: border-box;
            
            overflow: hidden;
            .custom {
                width: 100%;
            }
            .btn-picture {
                margin-right: 10%;
            }
            .btn-picture, .btn-my-pictures {
                width: 32%;
            }
        }
    }
}
.tmp1 {
    position: relative;
    height: 50%;
    font-size: 0.14rem;
    color: @pink;
    .text-to {
        position: absolute;
        top: 12%;
        left: 10%;
    }
    .text-recipient {
        position: absolute;
        top: 12%;
        left: 18%;
    }
    .text-content {
        position: absolute;
        display: block;
        top: 12%;
        left: 58%;
        width: 30%;
        word-break: break-all;
        text-align: left;
        line-height: 1.5;
    }
    .text-from-msgs {
        position: absolute;
        bottom: 16%;
        left: 58%;
        .text-from {
            color: @grey;
            display: inline-block;
            margin-left: 0.06rem;
        }
    }
    .text-phone {
        color: @grey;
        position: absolute;
        bottom: 5%;
        right: 3%;
        font-size: 0.12rem;
    }
}
.tmp2 {
    position: relative;
    height: 50%;
    font-size: 0.14rem;
    color: @pink;
    .text-to {
        position: absolute;
        top: 15%;
        left: 16%;
        color: white;
        font-style: italic;
    }
    .text-recipient {
        position: absolute;
        top: 15%;
        left: 23%;
        color: white;
    }
    .text-content {
        display: block;
        padding: 25% 16% 0 16%;
        word-break: break-all;
        text-align: left;
        line-height: 1.5;
    }
    .text-from-msgs {
        position: absolute;
        bottom: 16%;
        width: 100%;
        color: @grey;
        .text-by {
            margin-right: 0.06rem;
            font-style: italic;
        }
    }
    .text-phone {
        color: @grey;
        position: absolute;
        bottom: 5%;
        right: 3%;
        font-size: 0.12rem;
    }
}
.tmp3 {
    position: relative;
    height: 50%;
    font-size: 0.14rem;
    color: white;
    .text-to {
        color: white;
        font-style: italic;
        margin-top: 16%;
        display: inline-block;
        margin-right: 0.06rem;
    }
    .text-recipient {
    }
    .text-content {
        // position: absolute;
        display: block;
        padding: 8% 16% 0 16%;
        word-break: break-all;
        text-align: left;
        line-height: 1.5;
    }
    .text-from-msgs {
        position: absolute;
        bottom: 16%;
        right: 8%;
        color: @grey;
        .text-by {
            margin-right: 0.06rem;
            font-style: italic;
        }
    }
    .text-phone {
        color: @grey;
        position: absolute;
        bottom: 5%;
        right: 3%;
        font-size: 0.12rem;
        font-style: italic;
    }
}
</style>
<script>
import photoWill from 'components/photoWill'
export default {
    name: '',
    props: {
        tmpId: {
            type: [ String, Number ],
            default: -1
        },
        to: {
            type: String,
            default: ''
        },
        by: {
            type: String,
            default: ''
        },
        msg: {
            type: String,
            default: ''
        },
        phoneNum: {
            type: [ String, Number ],
            default: '18xxxx888'
        },
        value: {
            type: String,
            default: ''
        }
    },
    data: function () {
        return {
            file: this.value,
            photoWill: false,
        }
    },
    components: { photoWill },
    watch: {
        file (newVal) {
            this.$emit('input', newVal)
        }
    },
    methods: {
        openCamera (e) {
            e.target.nextElementSibling.click()
        },
        upImg (e) {
            let vm = this
            let reader = new FileReader()
            reader.readAsDataURL(e.target.files[0])
            reader.onloadend = function () {
                console.debug(reader.result)
                vm.file = reader.result
            }
        },
        toggleBgPicker () {
            this.file = ''
        },
        change () {
            let vm = this
            vm.photoWill = false
            setTimeout(function(){
                vm.photoWill = true
            }, 10)
        }
    },
    mounted: function () {
    }
}
</script>