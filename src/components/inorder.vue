<template>
    <div id="inorder">
        <div class="addadd">
            <div class="ttop">
                <div class="ttb">
                    <ul>
                        <li>
                            <div>
                                <p>所在地区</p>
                            </div>
                            <div>
                                <input type="text" placeholder="请输入省市区" v-model="i1">
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>详细地址</p>
                            </div>
                            <div>
                                <textarea type="password" placeholder="请输入详细地址" v-model="i2"></textarea>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>邮政编码</p>
                            </div>
                            <div>
                                <input  type="text" placeholder="请输入邮政编码" v-model="i3">
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>收货人姓名</p>
                            </div>
                            <div>
                                <input  type="text" placeholder="请输入收货人姓名" v-model="i4">
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>电话号码</p>
                            </div>
                            <div>
                                <input  type="text" placeholder="请输入电话号码" v-model="i5">
                            </div>
                        </li>
                    </ul>
                    <div class="ttan">
                        <div @click="dizhi">保存</div>
                        <div @click="quxiao">取消</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="incar-top">
            <div class="logo">
                <img src="../assets/img/zy-logo.jpg" alt="" style="width: 100%">
            </div>
            <div class="buzou">
                <el-steps :active="1" align-center class="el-steps">
                    <el-step title="查看订单" class="el-step"></el-step>
                    <el-step title="确认订单"></el-step>
                    <el-step title="选择支付方式"></el-step>
                    <el-step title="确认支付"></el-step>
                </el-steps>
            </div>
        </div>
        <div class="inorder-one">
            <small>01</small>
            <span>选择收货地址</span>
        </div>
        <div class="dizhi">
            <ul>
                <li v-for="item in address">
                    <p class="yi">{{item.city}}</p>
                    <span>{{item.address}}   {{item.zipcode}}</span>
                    <p class="er">{{item.name}}<span>{{item.tel}}</span></p>
                </li>
            </ul>
            <div class="button-box">
                <button class="new">使用新地址</button>
                <button class="new" @click="addadd">编辑地址</button>
                <button class="new">删除地址</button>
            </div>
        </div>
        <div class="inorder-one">
            <small>02</small>
            <span>确认商品信息</span>
        </div>
        <ul class="xinxi">
            <ul class="title">
                <li>商品信息</li>
                <li>商品单价</li>
                <li>商品数量</li>
                <li>商品小计</li>
                <li>操作</li>
            </ul>
            <li>
                <router-link to="">
                    <div class="hover">
                        <div class="car-img">
                            <img src="../assets/img/zy-car.jpg" alt="" style="width: 100%">
                        </div>
                        <div class="word">
                            <p>奶油慕斯蛋糕 是讨好味觉的 艺术【草莓口味】</p>
                            <span>三种口味</span>
                        </div>
                        <div class="xuan iconfont icon-xinxi"></div>
                    </div>
                </router-link>
                <div class="price">299.00</div>
                <div class="button">
                    <button class="jian" @click="name--">-</button>
                    <span class="i">{{name}}</span>
                    <button class="jia" @click="name++">+</button>
                </div>
                <div class="zongji">5999.00</div>
                <div class="del">
                    <button class="delete">删除</button>
                </div>
            </li>
            <li>
                <router-link to="">
                    <div class="hover">
                        <div class="car-img">
                            <img src="../assets/img/zy-car.jpg" alt="" style="width: 100%">
                        </div>
                        <div class="word">
                            <p>奶油慕斯蛋糕 是讨好味觉的 艺术【草莓口味】</p>
                            <span>三种口味</span>
                        </div>
                        <div class="xuan iconfont icon-xinxi"></div>
                    </div>
                </router-link>
                <div class="price">299.00</div>
                <div class="button">
                    <button class="jian" @click="name--">-</button>
                    <span class="i">{{name}}</span>
                    <button class="jia" @click="name++">+</button>
                </div>
                <div class="zongji">5999.00</div>
                <div class="del">
                    <button class="delete">删除</button>
                </div>
            </li>
            <li>
                <router-link to="">
                    <div class="hover">
                        <div class="car-img">
                            <img src="../assets/img/zy-car.jpg" alt="" style="width: 100%">
                        </div>
                        <div class="word">
                            <p>奶油慕斯蛋糕 是讨好味觉的 艺术【草莓口味】</p>
                            <span>三种口味</span>
                        </div>
                        <div class="xuan iconfont icon-xinxi"></div>
                    </div>
                </router-link>
                <div class="price">299.00</div>
                <div class="button">
                    <button class="jian" @click="name--">-</button>
                    <span class="i">{{name}}</span>
                    <button class="jia" @click="name++">+</button>
                </div>
                <div class="zongji">5999.00</div>
                <div class="del">
                    <button class="delete">删除</button>
                </div>
            </li>
            <p class="p"></p>
            <div class="over">
                <p class="bo">
                    <span>已选择商品<small>&nbsp;2&nbsp;</small>种</span>
                    <span>减免优惠价钱<small>&nbsp;20.00&nbsp;</small>元</span>
                    <span>合计算(不含运费)<strong>&nbsp;&nbsp;550&nbsp;&nbsp;</strong>RMB</span>
                </p>
                <div class="bu">
                    <button class="tijiao">确认订单</button>
                    <button class="fanhui">返回购物车</button>
                </div>
            </div>
        </ul>
    </div>
</template>
<script>
    export default{
        name: "inorder",
        data(){
            return {
                name:0,
                i1:"",
                i2:"",
                i3:"",
                i4:"",
                i5:"",
                address:[]
            }
        },
        created(){
            localStorage.id=1;
            let obj1={};
            obj1.id=localStorage.id;
            this.$http.post("/api/index/inabout",obj1,{
                headers: {
                    "content-type": 'application/json'
                }
            }).then(res=>{
                this.address=res.body;
            })
        },
        methods:{
            addadd(){
                let a=document.documentElement.clientHeight;
                let tan=document.querySelector('.addadd');
                tan.style.height=a+'px';
                tan.style.display='block';
            },
            quxiao(){
                let tan=document.querySelector('.addadd');
                tan.style.display='none';
            },
            dizhi(){
                let obj={};
                obj.city=this.i1;
                obj.address=this.i2;
                obj.zipcode=this.i3;
                obj.name=this.i4;
                obj.tel=this.i5;
                obj.uid=localStorage.id;
                this.$http.post("/api/index/inabout/address",obj,{
                    headers: {
                        "content-type": 'application/json'
                    }
                }).then(res=>{
                    if (res.body) {
                        this.address.push(res.body[0])
                        this.$message({
                            message: '添加成功',
                            type: 'success'
                        });
                        let tan=document.querySelector('.addadd');
                        tan.style.display='none';
                    }else{
                        this.$message.error('添加失败')
                    }
                })
            }
        }
    }
</script>
<style scoped lang="scss">
    #inorder{
        width: 100%;
        height: auto;
        .addadd{
            width: 100%;
            height: auto;
            background: rgba(0,0,0,0.3);
            position: fixed;
            top:0;
            left:0;
            z-index: 50;
            display: none;
            .ttop{
                width: 577px;
                height: 440px;
                position: fixed;
                top:0;
                bottom: 0;
                right:0;
                left:0;
                margin: auto;
                background: #ffffff;
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
                            margin-bottom: 15px;
                            div:first-child{
                                width: auto;
                                margin-right: 15px;
                                p:last-child{
                                    font-size: 14px;
                                    letter-spacing: -2px;
                                }
                                margin-right: 14px;
                            }
                            div:last-child{
                                input{
                                    width: 224px;
                                    height: 34px;
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
            }
        }
        .incar-top{
            width: 1200px;
            height: 55px;
            margin: 0 auto 30px;
            padding-top: 10px;
            .logo{
                width: 230px;
                height: 55px;
                float: left;
            }
            .buzou{
                width: 500px;
                height: 55px;
                float: right;
                .el-steps{
                    .is-text{
                        width: 17px;
                        height: 17px;
                        box-sizing: border-box;
                        border: 1px solid #BBBBBB;
                        background: #fff;
                    }
                }
            }
        }
        .inorder-one{
            width: 1200px;
            height: 37px;
            background: #E23338;
            margin: 0 auto;
            box-sizing: border-box;
            padding-left: 30px;
            small{
              font-size: 30px;
              color:#000;
              font-weight: 900;
              line-height: 37px;
            }
            span{
                font-size: 14px;
                color:#ffffff;
            }
        }
        .dizhi{
            width: 1200px;
            height: auto;
            margin: 0 auto 60px;
            padding: 55px 0 0 45px;
            box-sizing: border-box;
            ul{
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;
                > li{
                    width: 260px;
                    height: 165px;
                    box-sizing: border-box;
                    margin:0 40px 30px 0;
                    border-top: 6px solid #000;
                    padding:25px 0 20px 30px;
                    box-shadow: 3px 3px 25px 5px #EBEBEB;
                    float: left;
                    p.yi{
                        font-size: 14px;
                        color:#434343;
                    }
                    span{
                        font-size: 12px;
                        line-height: 25px;
                        margin-bottom: 20px;
                    }
                    p.er{
                        font-size: 16px;
                        color:#000;
                        font-weight: 800;
                        span{
                            font-size: 16px;
                        }
                    }
                }
                > li:hover{
                    border-top: 6px solid #E23338;
                }
            }
            .button-box{
                height: 45px;
                text-align: left;
                button{
                    width: 145px;
                    height: 38px;
                    margin-right: 10px;
                    background: #fff;
                    font-size: 14px;
                    color:#434343;
                    text-align: center;
                    line-height: 38px;
                    border: 2px solid #A5A5A5;
                }
                button:hover{
                    background: #000000;
                    color: #fff;
                }
            }
        }
        .xinxi{
            width: 1200px;
            height: 800px;
            box-sizing: border-box;
            margin: 0 auto;
            padding:50px 30px 0;
            ul.title{
                width: 100%;
                height: 50px;
                border-bottom: 1px solid #000;
                display: flex;
                justify-content: space-around;
                margin-bottom: 50px;
            }
            > li{
                width: 100%;
                height: 110px;
                margin: 30px 0 15px;
                box-sizing: border-box;
                overflow: hidden;
                display: flex;
                justify-content: space-around;
                input{
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    border:3px solid #E5E1E1;
                    float: left;
                    margin-top: 25px;
                }
                a{
                    display: block;
                    width: auto;
                    height: 110px;
                    .hover{
                        width: auto;
                        height: 110px;
                        padding: 20px 10px;
                        box-sizing: border-box;
                        position: relative;
                        .car-img{
                            width: 65px;
                            height: 70px;
                            float: left;
                            margin-right: 30px;
                        }
                        .word{
                            width: 90px;
                            height: 70px;
                            float: right;
                            p{
                                height: 50px;
                                font-size: 12px;
                                color:#5E5E5E;
                                line-height: 15px;
                            }
                            span{
                                font-size: 12px;
                                color: #B5B5B5;
                            }
                        }
                        .xuan{
                            position: absolute;
                            right:0;
                            bottom: 0;
                            width: 26px;
                            height: 26px;
                            background: #E23338;
                            color: #fff;
                            font-size: 14px;
                            line-height: 26px;
                            text-align: center;
                            display: none;
                        }
                    }
                }
                .price{
                    width: auto;
                    height: 70px;
                    font-size: 14px;
                    color: #000;
                    line-height: 70px;
                }
                .button{
                    width: 100px;
                    height: 70px;
                    box-sizing: border-box;
                    padding-top: 28px;
                    .jian{
                        background: #fff;
                        border:none;
                        outline: none;
                        font-size: 18px;
                        color:#000;
                        float: left;
                        margin-right: 18px;
                    }
                    span{
                        width: 45px;
                        font-size: 18px;
                        color:#000;
                        text-align: center;
                        border-bottom: 2px solid #404040;
                        float: left;
                    }
                    .jia{
                        background: #fff;
                        border:none;
                        outline: none;
                        font-size: 16px;
                        color:#000;
                        float: right;
                    }
                }
                .zongji{
                    width: 50px;
                    height: 70px;
                    line-height: 70px;
                }
                .del{
                    width: 80px;
                    height: 70px;
                    box-sizing: border-box;
                    padding-top: 20px;
                    .delete{
                        width: 100%;
                        height: 25px;
                        font-size: 12px;
                        color: #ffffff;
                        background: #000;
                        border: none;
                        outline: none;
                    }
                    .shou{
                        width: 100%;
                        height: 25px;
                        font-size: 12px;
                        color: #000;
                        background: #fff;
                        border: none;
                        outline: none;
                    }
                }
            }
            > li:hover{
                .hover {
                    border:2px solid #E23338;
                    .xuan{
                        display: block;
                    }
                }
            }
            .p{
                width: 100%;
                height: 1px;
                background: #000;
                margin: 80px 0 50px;
            }
            .over{
                width: 100%;
                height: auto;
                .bo{
                    width: 600px;
                    height: auto;
                    float: left;
                    span{
                        font-size: 14px;
                        color:#000;
                        margin-right: 35px;
                        small{
                            font-size: 20px;
                            color:#4F4F4F;
                        }
                        strong{
                            font-size: 22px;
                            color:#FF0007;
                        }
                    }
                }
                .bu{
                    width: 200px;
                    height: auto;
                    float: right;
                    text-align: center;
                    button{
                        width: 200px;
                        height: 45px;
                        border:1px solid #404040;
                        background: #fff;
                        margin-bottom: 15px;
                    }
                    button:hover{
                          background: #E23338;
                      }
                }
            }
        }
    }
</style>