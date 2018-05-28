<template>
    <div id="incar">
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
        <ul class="incar-center">
            <ul class="incar-nav">
                <li>
                    <input type="checkbox" class="yuan">
                    <span>全选</span>
                </li>
                <li>商品信息</li>
                <li>商品单价</li>
                <li>商品数量</li>
                <li>商品小计</li>
                <li>操作</li>
            </ul>
            <li>
                <input type="radio">
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
                    <button class="shou">移入收藏夹</button>
                </div>
            </li>
            <li>
                <input type="radio">
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
                    <button class="shou">移入收藏夹</button>
                </div>
            </li>
            <li>
                <input type="radio">
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
                    <button class="shou">移入收藏夹</button>
                </div>
            </li>
            <li>
                <input type="radio">
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
                    <button class="shou">移入收藏夹</button>
                </div>
            </li>
            <li>
                <input type="radio">
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
                    <button class="shou">移入收藏夹</button>
                </div>
            </li>
            <li>
                <input type="radio">
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
                    <button class="shou">移入收藏夹</button>
                </div>
            </li>
            <li>
                <input type="radio">
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
                    <button class="shou">移入收藏夹</button>
                </div>
            </li>
            <p class="bottom">
                <input type="checkbox">
                <span>全选</span>
                <span>加入购物车</span>
                <span>删除</span>
            </p>
            <div class="youhui">
                <div class="left">
                    <small>【&nbsp;&nbsp;<span>现金折扣 Cash discount</span>&nbsp;&nbsp;】</small>
                    <span>中国丝绸之路特惠   满  RMB999  减  RMB99 拷贝 2</span>
                </div>
                <div class="right">
                    <input type="checkbox">
                    <span>已参与</span>
                </div>
            </div>
            <div class="youhui">
                <div class="left">
                    <small>【&nbsp;&nbsp;<span>现金折扣 Cash discount</span>&nbsp;&nbsp;】</small>
                    <span>中国丝绸之路特惠   满  RMB999  减  RMB99 拷贝 2</span>
                </div>
                <div class="right">
                    <input type="checkbox">
                    <span>已参与</span>
                </div>
            </div>
            <div class="over">
                <div class="zuo">
                    <span>结算详情</span>
                    <img src="" alt="">
                </div>
                <div class="you">
                    <p>商品总价（RMB299.00）-活动优惠（RMB10.00）=商品金额总计（RMB578.00）<span>邮费：免邮费  顺丰次日达</span></p>
                    <div class="RMB">
                        <span class="zhi">支付金额<small>RMB</small></span>
                        <span class="pr">578.00</span>
                    </div>
                    <button class="jiesuan">去结算</button>
                </div>
            </div>
        </ul>
    </div>
</template>
<script>
    export default{
        name: "incar",
        data() {
            return {
                name:0,
            };
        },
    }
</script>
<style scoped lang="scss">
    #incar{
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
        .incar-center{
            width: 1200px;
            height: auto;
            margin: 0 auto;
            .incar-nav{
                width: 100%;
                height: 35px;
                background: #E23338;
                display: flex;
                justify-content: space-around;
                li{
                    font-size: 14px;
                    color: #fff;
                    text-align: center;
                    line-height: 28px;
                    .yuan{
                        width: 15px;
                        height: 15px;
                        border-radius: 50%;
                        border:2px solid #E5E1E1;
                        margin-right: 5px;
                    }
                }
            }
            > li{
                width: 100%;
                height: 110px;
                margin: 30px 0 15px;
                box-sizing: border-box;
                padding: 0 60px;
                overflow: hidden;
                display: flex;
                justify-content: space-between;
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
            .bottom{
                width: 100%;
                height: 20px;
                padding: 15px 0 20px;
                display: flex;
                margin-bottom: 20px;
                border-bottom: 2px solid #A4A4A4;
                input{
                    width: 15px;
                    height: 15px;
                    margin: 3px 15px 0 60px;
                }
                span{
                    font-size: 14px;
                    color: #7B7B7B;
                    margin-right: 20px;
                }
            }
            .youhui{
                width: 100%;
                height: 45px;
                background: #F5F5F5;
                box-sizing: border-box;
                padding: 0 15px;
                margin-bottom: 20px;
                .left {
                    width: auto;
                    float: left;
                    small {
                        font-size: 16px;
                        color: #000;
                        line-height: 45px;
                        font-weight: 600;
                        span {
                            font-size: 14px;
                            color: #000;
                        }
                    }
                    span {
                        font-size: 14px;
                        color: #000;
                    }
                }
                .right{
                    width: auto;
                    float: right;
                    input{
                        margin-top: 16px;
                    }
                    span{
                        font-size: 14px;
                        color: #000;
                    }
                }
            }
            .over{
                width: 100%;
                height: 170px;
                margin: 45px 0;
                position: relative;
                .zuo{
                    float: left;
                    font-size: 14px;
                    color:#000;
                    font-weight: 800;
                }
                .you{
                    float: right;
                    width: 520px;
                    height: 100%;
                    background: #ffffff;
                    p{
                        font-size: 14px;
                        color: #000;
                        text-align: right;
                        margin-bottom: 38px;
                        span{
                            font-size: 14px;
                            color: #000;
                        }
                    }
                    .RMB{
                        float: right;
                        .zhi{
                            display: inline-block;
                            width: 48px;
                            height: auto;
                            font-size: 12px;
                            small{
                                font-weight: 900;
                            }
                        }
                        .pr{
                            font-size: 24px;
                            font-weight: 800;
                            color: #E23338;
                        }
                    }
                    .jiesuan{
                        width: 180px;
                        height: 40px;
                        background: #E23338;
                        text-align: center;
                        font-size: 16px;
                        color: #fff;
                        line-height: 40px;
                        position: absolute;
                        bottom: 0;
                        right:0;
                        outline: none;
                        border: none;
                    }
                }
            }
        }
    }

</style>