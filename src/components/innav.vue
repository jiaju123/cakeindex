<template>
    <div>
        <div class="top">
            <div class="logo"><img src="../assets/lhyimg/navlogo.png" alt=""></div>
            <ul class="nav">
                <li v-for="item in arr">
                    <router-link :to="item.to">{{item.name}}</router-link>
                </li>
            </ul>
            <div class="right">
                <a href="">登录</a>
                <span>/</span>
                <a href="">注册</a>
            </div>
        </div>
        <router-view></router-view>
        <div class="bottom">
            <div class="bottombox">
                <div class="box1">
                    <div class="box">
                        <div class="contact">
                            <p class="ctttext">联系我们</p>
                            <p class="cttetext">contact us</p>
                            <p class="cttd">您可以通过一方式联系我们</p>
                        </div>
                        <div class="bot">
                            <div class="p">
                                <span><img src="../assets/lhyimg/1.png" alt=""></span>
                                <p>山西省太原市小店区平阳路学府街口开通大厦2层</p>
                            </div>
                            <div class="p">
                                <span><img src="../assets/lhyimg/2.png" alt=""></span>
                                <p>www.baid.com</p>
                            </div>
                            <div class="p">
                                <span><img src="../assets/lhyimg/3.png" alt=""></span>
                                <p>0351-6144009/13712344321</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box2">
                    <div class="box">
                        <div class="contact">
                            <p class="ctttext">联系我们</p>
                            <p class="cttetext">contact us</p>
                            <p class="cttd">您可以通过一方式联系我们</p>
                        </div>
                        <div class="bot">
                            <div class="bangzhu">
                                <p class="bzzx">帮助中心</p>
                                <p class="ebzzx">MEIYUE BRAND</p>
                                <ul>
                                    <li>企业服务优势</li>
                                    <li>企业服务优势</li>
                                    <li>企业服务优势</li>
                                </ul>
                            </div>
                            <div class="bangzhu">
                                <p class="bzzx">帮助中心</p>
                                <p class="ebzzx">MEIYUE BRAND</p>
                                <ul>
                                    <li>企业服务优势</li>
                                    <li>企业服务优势</li>
                                    <li>企业服务优势</li>
                                </ul>
                            </div>
                            <div class="bangzhu">
                                <p class="bzzx">帮助中心</p>
                                <p class="ebzzx">MEIYUE BRAND</p>
                                <ul>
                                    <li>企业服务优势</li>
                                    <li>企业服务优势</li>
                                    <li>企业服务优势</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box3">
                    <div class="box">
                        <div class="contact">
                            <p class="ctttext">联系我们</p>
                            <p class="cttetext">contact us</p>
                            <p class="cttd">您可以通过一方式联系我们</p>
                        </div>
                        <div class="erweima">
                            <img src="../assets/lhyimg/4.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="banquan">
                <p>COPYRIGHT @ 2006-2018 ZCOO优质蛋糕</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'innav',
        data(){
            return {
                arr:[
                    {name:'',to:'/index',id:''},
                    {name:'',to:'/cate:id',id:''},
                    {name:'',to:'/cate:id',id:''},
                    {name:'',to:'/cate:id',id:''},
                    {name:'',to:'/inabout',id:''},
                ]
            }
        },
        created(){
            this.$http.get("/api/index/innav").then(res=>{
                this.arr[0].name=res.body[0].name;
                this.arr[1].name=res.body[1].name;
                this.arr[2].name=res.body[2].name;
                this.arr[3].name=res.body[3].name;
                this.arr[4].name=res.body[4].name;
                this.arr[0].id=res.body[0].id;
                this.arr[1].id=res.body[1].id;
                this.arr[2].id=res.body[2].id;
                this.arr[3].id=res.body[3].id;
                this.arr[4].id=res.body[4].id;
            })
        }
    }
</script>
<style scoped lang='scss'>
    .top{
        width:1200px;
        height:102px;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
        .logo{
            width: 80px;
            height:80px;
            margin-top: 11px;
            img{
                width:100%;
            }
        }
        ul.nav{
            flex-grow: 1;
            display: flex;
            justify-content: space-around;
            li{
                line-height: 102px;
                a{
                    color:#838383;
                }
                a:hover{
                    color:red;
                }
            }
        }
        .right{
            width:150px;
            line-height:102px;
            a:hover{
                color:red;
            }
        }
    }
    .bottom{
        width:100%;
        height:555px;
        background: #ffe5ea;
        .bottombox{
            width:1200px;
            margin:0 auto;
            padding-top: 210px;
            display: flex;
            justify-content:space-around;
            .box1{
                width:450px;
                border-right: 1px solid #f1e1e4;
                .box{
                    padding:0 60px;
                    .contact{
                        width:170px;
                        height:60px;
                        margin-bottom:45px;
                        .ctttext{
                            font-size: 19px;
                            color:#000;
                        }
                        .cttetext{
                            font-size: 11px;
                            color:#000;
                        }
                        .cttd{
                            font-size: 14px;
                            color:#736769;
                        }
                    }
                    .bot{
                        width:330px;
                        .p{
                            width:100%;
                            height:20px;
                            margin-bottom: 10px;
                            span{
                                float: left;
                            }
                            p{
                                font-size:  14px;
                                float: left;
                                margin-left: 12px;
                            }
                        }
                    }
                ;
                }
            }
            .box2{
                width:530px;
                border-right: 1px solid #f1e1e4;
                .box{
                    padding:0 60px;
                    .contact{
                        width:170px;
                        height:60px;
                        margin-bottom:30px;
                        .ctttext{
                            font-size: 19px;
                            color:#000;
                        }
                        .cttetext{
                            font-size: 11px;
                            color:#000;
                        }
                        .cttd{
                            font-size: 14px;
                            color:#736769;
                        }
                    }
                    .bot{
                        display: flex;
                        justify-content:space-between;
                        .bangzhu{
                            .bzzx{
                                font-size: 16px;
                            }
                            .ebzzx{
                                font-size: 9px;
                            }
                            ul{
                                margin-top: 22px;
                                li{
                                    margin-bottom: 20px;
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                }
            }
            .box3{
                width:320px;
                .box{
                    padding:0 60px;
                    .contact{
                        width:170px;
                        height:60px;
                        margin-bottom:45px;
                        .ctttext{
                            font-size: 19px;
                            color:#000;
                        }
                        .cttetext{
                            font-size: 11px;
                            color:#000;
                        }
                        .cttd{
                            font-size: 14px;
                            color:#736769;
                        }
                    }
                    .erweima{
                        width:128px;
                        height:128px;
                        img{
                            width:100%;
                        }
                    }
                }
            }
        }
        .banquan{
            width:100%;
            height:47px;
            border-top:1px solid #d9c4c8;
            margin-top: 28px;
            p{
                text-align: center;
                line-height:47px;
                color:#d4bec2;
                font-size: 10px;
            }
        }
    }
</style> 