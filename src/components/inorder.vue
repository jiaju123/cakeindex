<template>
    <div id="inorder">
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
        <ul class="dizhi">
            <li>
                <p class="yi">北京市 朝阳区</p>
                <span>三里屯SOHO大厦A栋1002室   020004 </span>
                <p class="er">张冲 <span>134-2345-6549</span></p>
            </li>
            <li>
                <p class="yi">北京市 朝阳区</p>
                <span>三里屯SOHO大厦A栋1002室   020004 </span>
                <p class="er">张冲 <span>134-2345-6549</span></p>
            </li>
            <li>
                <p class="yi">北京市 朝阳区</p>
                <span>三里屯SOHO大厦A栋1002室   020004 </span>
                <p class="er">张冲 <span>134-2345-6549</span></p>
            </li>
            <div class="button-box">
                <button class="new">使用新地址</button>
                <button class="new">编辑地址</button>
                <button class="new">删除地址</button>
            </div>
        </ul>
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
            }
        }
    }
</script>
<style scoped lang="scss">
    #inorder{
        width: 100%;
        height: auto;
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
            > li{
                width: 260px;
                height: auto;
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
            .button-box{
                width: 800px;
                height: auto;
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