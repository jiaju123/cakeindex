<template>
    <div>
        <div class="tan">
            <div class="ttop">
                <div class="ttt">
                    <img src="../assets/lhyimg/deng.png" alt="">
                </div>
                <div class="ttm">
                    <span>欢</span>
                    <span>迎</span>
                    <span>登</span>
                    <span>录</span>
                </div>
                <div class="ttb">
                    <ul>
                        <li>
                            <div>
                                <img src="../assets/lhyimg/dltb (2).png" alt="">
                            </div>
                            <div>
                                <p>用户名</p>
                                <p>NAME</p>
                            </div>
                            <div>
                                <input type="text" placeholder="请输入用户名/邮箱/手机号" v-model="input10">
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="../assets/lhyimg/dltb (1).png" alt="">
                            </div>
                            <div>
                                <p>密码</p>
                                <p>PASSWORD</p>
                            </div>
                            <div>
                                <input type="password" placeholder="请输入密码" v-model="input11">
                                <input type="checkbox" class="che"><span>忘记密码</span>
                            </div>
                        </li>
                    </ul>
                    <div class="ttan">
                        <div @click="login">登录</div>
                        <div @click="rere">注册</div>
                    </div>
                    <div class="ttz">
                        <p>Can not seize the time, the Can not seize the time, the</p>
                        <p>solidification of time</p>
                    </div>
                </div>
                <div class="tbot">
                    <ul>
                        <li>
                            <a href="">
                                <img src="../assets/lhyimg/dx (2).png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/lhyimg/dx (3).png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/lhyimg/dx (1).png" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="tui">
                    <img src="../assets/lhyimg/tui_06.png" alt="" @click="tui">
                </div>
            </div>
            <div class="tbot">
                <div class="ttt">
                    <img src="../assets/lhyimg/deng.png" alt="">
                </div>
                <div class="ttm">
                    <span>欢</span>
                    <span>迎</span>
                    <span>注</span>
                    <span>册</span>
                </div>
                <div class="ttb">
                    <ul>
                        <li>
                            <div>
                                <img src="../assets/lhyimg/dltb (2).png" alt="">
                            </div>
                            <div>
                                <p>用户名</p>
                                <p>NAME</p>
                            </div>
                            <div>
                                <input type="text" placeholder="请输入用户名/邮箱/手机号" v-model="form.zhanghao">
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="../assets/lhyimg/dltb (1).png" alt="">
                            </div>
                            <div>
                                <p>密码</p>
                                <p>PASSWORD</p>
                            </div>
                            <div>
                                <input type="password" placeholder="请输入密码" v-model="form.pass">
                            </div>
                        </li>
                        <li style="padding-left: 110px;box-sizing: border-box">

                            <input type="password" placeholder="请再次输入您的密码" style="padding-left:15px;width:224px;height:33px">

                        </li>
                    </ul>
                    <div class="ttan">
                        <div @click="liji">立即注册</div>
                        <div @click="redeng">返回登录</div>
                    </div>
                    <div class="ttz">
                        <p>Can not seize the time, the Can not seize the time, the</p>
                        <p>solidification of time</p>
                    </div>
                </div>
                <div class="tbot">
                    <ul>
                        <li>
                            <a href="">
                                <img src="../assets/lhyimg/dx (2).png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/lhyimg/dx (3).png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/lhyimg/dx (1).png" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="tui">
                    <img src="../assets/lhyimg/tui_06.png" alt="" @click="tui">
                </div>
            </div>
        </div>
        <div class="top">
            <div class="logo"><img src="../assets/lhyimg/navlogo.png" alt=""></div>
            <ul class="nav">
                <li v-for="item in arr">
                    <router-link :to="item.to">{{item.name}}</router-link>
                </li>
            </ul>
            <div class="right">
                <a  @click="tan">登录</a>
                <span>/</span>
                <a  @click="regist">注册</a>
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
                    {name:'',to:'/incate',id:''},
                    {name:'',to:'/incate',id:''},
                    {name:'',to:'/incate',id:''},
                    {name:'',to:'/indexcar',id:''},
                ],
                form:{zhanghao:'',pass:''},
                input10:"",
                input11:""
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
        },
        methods:{
            tan(){
                let a=document.documentElement.clientHeight;
                let tan=document.querySelector('.tan');
                tan.style.height=a+'px';
                tan.style.display='block';
                tan.firstElementChild.style.display='block';
                tan.lastElementChild.style.display='none';
            },
            tui(){
                let tan=document.querySelector('.tan');
                tan.style.display='none';
            },
            regist(){
                let a=document.documentElement.clientHeight;
                let tan=document.querySelector('.tan');
                tan.style.height=a+'px';
                tan.style.display='block';
                tan.firstElementChild.style.display='none';
                tan.lastElementChild.style.display='block';
            },
            redeng(){
                let tan=document.querySelector('.tan');
                tan.firstElementChild.style.display='block';
                tan.lastElementChild.style.display='none';
            },
            rere(){
                let tan=document.querySelector('.tan');
                tan.firstElementChild.style.display='none';
                tan.lastElementChild.style.display='block';
            },
            liji(){
                let obj = Object.assign({},this.form);
                this.$http.post('/api/index/innav/regist',obj,{
                    headers:{
                        "content-type":"application/json"
                    }
                }).then(response=>{
                    if (response.body=="ok"){
                        this.$message('注册成功！');
                        setTimeout(()=>{
                            this.$router.push("/");
                        },1000);
                    }else{
                        this.$message('注册失败,用户已存在！');
                    }
                })
            },
            login(){
                let obj = {};
                obj.zhanghao = this.input10;
                obj.pass = this.input11;
                this.$http.post('/api/index/innav/login',obj,{
                    headers: {
                        "content-type": 'application/json'
                    }
                }).then(res => {
                    if (res.body!= 'ok') {
                        alert(res.body)
                    } else {
                        this.$message('登录成功！');
                        let tan=document.querySelector('.tan');
                        tan.style.display='none';
                    }
                })
            }

        }
    }
</script>
<style scoped lang='scss'>
    .tan{
        width: 100%;
        height: auto;
        background: rgba(0,0,0,0.3);
        position: fixed;
        top:0;
        left:0;
        z-index: 50;
        display: none;
        .ttop{
            width: 477px;
            height: 340px;
            position: fixed;
            top:0;
            bottom: 0;
            right:0;
            left:0;
            margin: auto;
            background: #ffffff;
            display: none;
            .ttt{
                position: absolute;
                top: -45px;
                left:0;
                right: 0;
                margin: 0 auto;
                width: 95px;
                height: 95px;
                img{
                    display: block;
                    width: 100%;
                }
            }
            .ttm{
                width: 345px;
                height: 40px;
                border: 1px solid #898989;
                background: #ffffff;
                text-align: center;
                line-height: 40px;
                z-index: 5;
                position: absolute;
                top: -20px;
                left: 0;
                right: 0;
                margin: 0 auto;
                span{
                    padding-right: 10px;
                    border-right: 1px solid #898989;
                }
                span:last-child{
                    border-right: none;
                }
            }
            .ttb{
                width: 100%;
                height: 100%;
                padding: 51px 45px 49px 75px;
                box-sizing: border-box;
                ul{
                    width: auto;
                    height:auto;
                    li{
                        width:100%;
                        height: auto;
                        display: flex;
                        justify-content: flex-start;
                        margin-bottom: 34px;
                        div:first-child{
                            margin-right: 8px;
                            width: 42px;
                            img {
                                display: block;
                                width: 100%;
                            }
                        }
                        div:nth-child(2){
                            width: 48px;
                            p:last-child{
                                color: #fae2e2;
                                font-size: 7px;
                                letter-spacing: -2px;
                            }
                            margin-right: 14px;
                        }
                        div:last-child{
                            input{
                                width: 224px;
                                height: 33px;
                                padding-left: 10px;
                            }
                            .che{
                                width: 11px;
                                height: 11px;
                            }
                            span{
                                font-size: 10px;
                                color: #b4b4b4;
                            }
                        }

                    }
                }
                .ttan{
                    margin-bottom: 35px;
                    width: 100%;
                    height: auto;
                    display: flex;
                    justify-content: center;
                    div:first-child{
                        width: 118px;
                        height: 26px;
                        background: #ffb2b2;
                        border-radius: 15px;
                        text-align: center;
                        line-height: 26px;
                        font-size: 12px;
                        color: #ffffff;
                        margin-right: 8px;
                    }
                    div:last-child{
                        width: 118px;
                        height: 26px;
                        text-align: center;
                        line-height: 26px;
                        border-radius: 15px;
                        border: 1px solid #c8c8c8;

                    }
                }
                .ttz{
                    width: auto;
                    margin: 0 auto;
                    height: auto;
                    p{
                        font-size: 8px;
                        color: #eeeeee;
                        text-align: center;
                    }
                }
            }
            .tbot{
                position: absolute;
                bottom: -45px;
                right:0;
                left:0;
                margin:0 auto;
                width: 100%;
                height: auto;
                ul{
                    width: 100%;
                    height: auto;
                    display: flex;
                    justify-content: center;
                    li{
                        width: auto;
                        height: auto;
                        margin-right: 15px ;
                        a{
                            display: block;
                            img {
                                display: block;
                            }
                        }
                    }
                }
            }
            .tui{
                position: absolute;
                right: 15px;
                top: 15px;
                width: auto;
                height: auto;
                img{
                    display: block;
                }
            }
        }
        .tbot{
            width: 477px;
            height: 340px;
            position: fixed;
            top:0;
            bottom: 0;
            right:0;
            left:0;
            margin: auto;
            background: #ffffff;
            display: none;
            .ttt{
                position: absolute;
                top: -45px;
                left:0;
                right: 0;
                margin: 0 auto;
                width: 95px;
                height: 95px;
                img{
                    display: block;
                    width: 100%;
                }
            }
            .ttm{
                width: 345px;
                height: 40px;
                border: 1px solid #898989;
                background: #ffffff;
                text-align: center;
                line-height: 40px;
                z-index: 5;
                position: absolute;
                top: -20px;
                left: 0;
                right: 0;
                margin: 0 auto;
                span{
                    padding-right: 10px;
                    border-right: 1px solid #898989;
                }
                span:last-child{
                    border-right: none;
                }
            }
            .ttb{
                width: 100%;
                height: 100%;
                padding: 51px 45px 49px 75px;
                box-sizing: border-box;
                ul{
                    width: auto;
                    height:auto;
                    li{
                        width:100%;
                        height: auto;
                        display: flex;
                        justify-content: flex-start;
                        margin-bottom: 19px;
                        div:first-child{
                            margin-right: 8px;
                            width: 42px;
                            img {
                                display: block;
                                width: 100%;
                            }
                        }
                        div:nth-child(2){
                            width: 48px;
                            p:last-child{
                                color: #fae2e2;
                                font-size: 7px;
                                letter-spacing: -2px;
                            }
                            margin-right: 14px;
                        }
                        div:last-child{
                            input{
                                width: 224px;
                                height: 33px;
                                padding-left: 10px;
                            }
                            .che{
                                width: 11px;
                                height: 11px;
                            }
                            span{
                                font-size: 10px;
                                color: #b4b4b4;
                            }
                        }

                    }
                }
                .ttan{
                    margin-bottom: 35px;
                    width: 100%;
                    height: auto;
                    display: flex;
                    justify-content: center;
                    div:first-child{
                        width: 118px;
                        height: 26px;
                        background: #ffb2b2;
                        border-radius: 15px;
                        text-align: center;
                        line-height: 26px;
                        font-size: 12px;
                        color: #ffffff;
                        margin-right: 8px;
                    }
                    div:last-child{
                        width: 118px;
                        height: 26px;
                        text-align: center;
                        line-height: 26px;
                        border-radius: 15px;
                        border: 1px solid #c8c8c8;

                    }
                }
                .ttz{
                    width: auto;
                    margin: 0 auto;
                    height: auto;
                    p{
                        font-size: 8px;
                        color: #eeeeee;
                        text-align: center;
                    }
                }
            }
            .tbot{
                position: absolute;
                bottom: -45px;
                right:0;
                left:0;
                margin:0 auto;
                width: 100%;
                height: auto;
                ul{
                    width: 100%;
                    height: auto;
                    display: flex;
                    justify-content: center;
                    li{
                        width: auto;
                        height: auto;
                        margin-right: 15px ;
                        a{
                            display: block;
                            img {
                                display: block;
                            }
                        }
                    }
                }
            }
            .tui{
                position: absolute;
                right: 15px;
                top: 15px;
                width: auto;
                height: auto;
                img{
                    display: block;
                }
            }
        }

    }
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
        height:505px;
        background: #ffe5ea;
        .bottombox{
            width:1200px;
            margin:0 auto;
            padding-top: 160px;
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
