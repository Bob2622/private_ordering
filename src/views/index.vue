<template>
<div class="index">
    <div class="head">
        <img src="../assets/5-20.png" alt="">
        <h5>活动介绍</h5>
        <p class="actity-detail">
            您可以在本次活动中为TA订制一个专属的应用开机画面（小米手机中的视频、音乐、主题等系统应用），给TA一个意想不到的惊喜。订制过程中, 用户可以上传自己的图片&祝福&昵称, 但是这部分内容需要经过内容审核。
        </p>
        <div class="protocal">
            <img class="phone" src="../assets/phone.png" alt="">
            <a href="">查看详情</a>
            <div :class="{ 'checked': acceptProtocal }" @click="acceptProtocal = !acceptProtocal">
                我已阅读相关协议<i class="fa fa-check-circle" aria-hidden="true"></i>
            </div>
            <div :class="{ 'checked': acceptPublic }" @click="acceptPublic = !acceptPublic">
                允许公开发表并分享你的祝福<i class="fa fa-check-circle" aria-hidden="true"></i>
            </div>
        </div>
        <div class="phoneNum">
            <div class="phoneNum_ta">TA的小米手机号</div>

            <input class="phone_user" type="text" v-model="toPhoneNum" placeholder="在此输入TA的手机号">

            <div class="phoneNum_warn">
                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                请确认对方为小米手机，非小米手机不能接受
            </div>
        </div>
          <div class="showDate">
            <div class="showDate_text">展现日期</div>
            <div class="showDate_a showDate_time">
                <span class="show_day">19日</span><br/>
                <span class="show_month">2017年5月</span>
            </div>
            <div class="showDate_b showDate_time">
                <span class="show_day">20日</span><br/>
                <span class="show_month">2017年5月</span>
            </div>
            <div class="showDate_c showDate_time">
                <span class="show_day">21日</span><br/>
                <span class="show_month">2017年5月</span>
            </div>
        </div>

        <div class="share">
            <div class="share_text">分享</div>
            <div class="share_find">找不到小米手机用户？</div>
            <div class="share_love">分享链接，看看谁会对我表白。</div>
            <input class="share_bnt" type="button" value="分享">          
        </div>

        <div class="next_step">
            <input class="next_step_bnt" type="button" value="下一步" @click="next">
        </div>
    </div>

</div>
</template>
<style lang="less" scoped>
.index {
    .head {
        padding: 0.4rem 0.4rem 0 0.4rem;
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
            text-align: left;
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
            .fa {
                margin-left: 0.04rem;
            }
            .checked .fa {
                color: #fd6776;
            }
        }
        .phoneNum {
            position: relative;
            background: white;         
            margin: 0.05rem -0.40rem 0 -0.40rem;
    
            border:1px solid transparent;//??

            .fa-exclamation-circle {
                color: #dc5753;
            }
            .phoneNum_ta {
                text-align: left;
                font-size: 0.09rem;
                margin-top: 0.14rem;
                margin-left: 0.16rem;
            }
            .phone_user {
                height: 0.3rem;
                border: 1px solid #dfe3e5;
                position: relative;           
                width: 2rem;
                border-radius: 0.26rem;
                text-align: center;
                font-size: 0.16rem;
                margin-top: 0.18rem;
                color: inherit;
                background-color: #f8f9fa;
                &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                  color: #A0AAB2;
                }
                &::-moz-placeholder { /* Firefox 19+ */
                  color: #A0AAB2;
                }
                &:-ms-input-placeholder { /* IE 10+ */
                  color: #A0AAB2;
                }
                &:-moz-placeholder { /* Firefox 18- */
                  color: #A0AAB2;
                }
            }

            .phoneNum_warn {
                position: relative;
                font-size: 0.08rem;
                margin-top: 0.11rem;
                margin-bottom: 0.18rem;
            }
        }
        .showDate {
            position: relative;
            background: white;         
            margin: 0.05rem -0.40rem 0 -0.40rem;   
            border:1px solid transparent;
            overflow: hidden;
            .showDate_text {
                text-align: left;
                font-size: 0.09rem;
                margin-top: 0.14rem;
                margin-left: 0.16rem;
            }
            .showDate_time {
                border-radius: 0.25rem;
                border: 1px solid #dfe3e5;
                float: left;          
                width: 0.84rem;
                height: 0.6rem;
                padding-top: 0.12rem;
                padding-bottom: 0.15rem;
                text-align: center;
                margin-top: 0.15rem;
                margin-bottom: 0.15rem;
                background-color: #fd6776;
                color: white;
                box-sizing: border-box;
                .show_day {
                    font-size: 0.16rem;
                }     
                 .show_month {
                    font-size: 0.12rem;
                    line-height: 1.6;
                } 
            }
            .showDate_a {
                margin-left: 0.24rem;
            }
            .showDate_b {
                margin-left: 0.1rem;
            }
            .showDate_c {
                margin-left: 0.1rem;
            }
        }

        .share {
            position: relative;
            background: white;
            margin: 0.05rem -0.40rem 0 -0.40rem;
            border:1px solid transparent;
            .share_text {
                text-align: left;
                font-size: 0.09rem;
                margin-top: 0.14rem;
                margin-left: 0.16rem;
                margin-bottom: 0.11rem;
            }
            .share_find {
                margin-bottom: 0.03rem;
            }
            .share_love {
                margin-bottom: 0.12rem;
            }
            .share_bnt {
                margin-bottom: 0.18rem;
                height: 0.3rem;
                width: 0.54rem;
                border: 1px solid #dee2e5;
                background: #f8f9fa;
                border-radius: 0.5rem;
                color: #A0AAB2;
            }
        }

        .next_step {
            position: relative;
            background: white;         
            margin: 0.05rem -0.40rem 0 -0.40rem;
            padding: 0.12rem 0.20rem 0.25rem 0.20rem;
            border:1px solid transparent;//??
            .next_step_bnt {
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
}
</style>
<script>
export default {
    name: '',
    props: {
    },
    data: function () {
        return {
            // 条件
            acceptProtocal: true,
            acceptPublic: false,
            toPhoneNum: '', // 对方手机号
            dates: [ '20170519', '20170520', '20170521' ],
        }
    },
    methods: {
        next () {
            this.$router.push({
                path: '/chooseTemplate'
            })
        }
    },
    mounted: function () {
    }
}
</script>