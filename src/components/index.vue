<template>
    <div>
        <swiper :options="swiperOption" class="banner">
            <swiper-slide>
                <img src="../assets/img1/shw (7).png" alt="">
                <div>
                    <p class="b1">MCAKE X 女神节</p>
                    <p class="b2">抽女神卡 赢免费小食 </p>
                    <p class="b3">立减38元</p>
                    <p class="b4">ingSeries</p>
                    <p class="b5">All the resources of this station are fo</p>
                    <p class="b6">al use. Otherwise, all the consequences will be borne b</p>
                    <p class="b7">tion to help users to eed up dow</p>
                    <p class="bg">立即购买</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/img1/shw (7).png" alt="">
                <div>
                    <p class="b1">MCAKE X 女神节</p>
                    <p class="b2">抽女神卡 赢免费小食 </p>
                    <p class="b3">立减38元</p>
                    <p class="b4">ingSeries</p>
                    <p class="b5">All the resources of this station are fo</p>
                    <p class="b6">al use. Otherwise, all the consequences will be borne b</p>
                    <p class="b7">tion to help users to eed up dow</p>
                    <p class="bg">立即购买</p>
                </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <section class="classic">
            <ul>
                <li>
                    <div class="ctop">
                        <div>
                            <p>New product area</p>
                            <p>经典系列</p>
                        </div>
                        <div class="ctimg">
                            <img src="../assets/img1/shw (4).png" alt="">
                        </div>
                    </div>
                    <div class="cmid">
                        <div class="cml">
                            <img :src="crr[0].desc1[0].url" alt="">
                        </div>
                        <div class="cmr">
                            <div class="cmrt">
                                <div>
                                    <p>Happiness and</p>
                                    <p>A good art piece </p>
                                </div>
                                <div>
                                    <p><span>{{crr[0].priceo}}</span>RMB</p>
                                </div>
                            </div>
                            <div class="cmrm">
                                <h2>{{crr[0].name}}</h2>
                                <p style="margin-bottom: 23px;font-size: 15px">{{crr[0].title1}}</p>
                                <p class="p2">{{crr[0].title2}}</p>
                                <p class="p2">{{crr[0].title3}}</p>
                                <h5>{{crr[0].title4}}</h5>
                            </div>
                            <div class="cmrb">
                                <div class="cb1">
                                    <span style="color: #ffffff">￥</span>
                                </div>
                                <div class="cb2">
                                    <span class="iconfont icon-gouwucheiconling" style="color: #ffffff" @click="addcar(0)"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="cmid">
                        <div class="cmr">
                            <div class="cmrt">
                                <div>
                                    <p>Happiness and</p>
                                    <p>A good art piece </p>
                                </div>
                                <div>
                                    <p><span>{{crr[1].priceo}}</span>RMB</p>
                                </div>
                            </div>
                            <div class="cmrm">
                                <h2>{{crr[1].name}}</h2>
                                <p style="margin-bottom: 23px;font-size: 15px">{{crr[1].title1}}</p>
                                <p class="p2">{{crr[1].title2}}</p>
                                <p class="p2">{{crr[1].title3}}</p>
                                <h5>{{crr[1].title4}}</h5>
                            </div>
                            <div class="cmrb">
                                <div class="cb1">
                                    <span style="color: #ffffff">￥</span>
                                </div>
                                <div class="cb2">
                                    <span class="iconfont icon-gouwucheiconling" style="color: #ffffff" @click="addcar(1)"></span>
                                </div>
                            </div>
                        </div>
                        <div class="cml">
                            <img :src="crr[1].desc1[0].url" alt="">
                        </div>
                    </div>
                </li>
            </ul>

        </section>
        <section class="gg">
            <div class="bb"></div>
              <div>
                  <img src="../assets/img1/shw (10).png" alt="">
              </div>
              <div>
                  <img src="../assets/img1/shw (8).png" alt="">
              </div>
              <div>
                  <img src="../assets/img1/shw (11).png" alt="">
              </div>
        </section>
        <section class="sweet">
            <div class="stop">
                <div>
                    <p>New product area</p>
                    <p>甜蜜系列</p>

                </div>
                <div class="stimg">
                    <img src="../assets/img1/shw (4).png" alt="">
                </div>
            </div>
            <div class="smid">
                <ul>
                    <li v-for="item in arr">
                        <router-link :to="'/xiangqing/'+item.id">
                            <div>
                                <img :src="item.desc1[0].url" alt="">
                            </div>
                            <h3 style="color: #000">{{item.name}}</h3>
                            <p class="sp1">{{item.title1}}</p>
                            <p class="sp2">{{item.pricen}}<span>RMB</span></p>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="sbot">
                <p>
                    本站所有资源仅供学习与参考，请勿用于商业用途，否请勿用于商业用途，产则参考，请勿用于商业用途，产生的一切后果</p>
                <p>各线路极速下载器通过p2p加速功能，帮助用户对于参考，请勿用参考，请勿用于参考，请勿用于商业用途，商业用途，于商业用途，大文件能更好的加速下载。</p>
                <p>其他普通下载点限制多线程，仅允许直参考，请勿用于商业用途，接点击或另存为下载.</p>
               <div>
                   <p>use, otherwise all the consequences will be produced.The speed downloader of each line
                   </p>
                   <p style="margin-bottom: 33px">
                       through P2P accelerates the function to help users to speed up dow
                   </p>
                   <div class="more"><router-link :to="'/incate'">MORE</router-link></div>
               </div>
            </div>
        </section>
        <section class="gg2">
            <div>
                <img src="../assets/img1/shw (12).png" alt="">
            </div>
            <div>
                <img src="../assets/img1/shw (13).png" alt="">
            </div>
        </section>
        <section class="girl">
            <div class="gtop">
                <div>
                    <p>New product area</p>
                    <p>女神系列</p>
                </div>
                <div class="gtimg">
                    <img src="../assets/img1/shw (4).png" alt="">
                </div>
            </div>
            <div class="gmid">
                <ul>
                    <li v-for="item in brr">
                        <router-link :to="'/xiangqing/'+item.id">
                            <div>
                                <img :src="item.desc1[0].url" alt="">
                            </div>
                            <h3 style="color: #000">{{item.name}}</h3>
                            <p class="sp1">{{item.title1}}</p>
                            <p class="sp2">{{item.pricen}}<span>RMB</span></p>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="gbot">
                <p>
                    本站所有资源仅供学习与参考，请勿用于商业用途，否请勿用于商业用途，产则参考，请勿用于商业用途，产生的一切后果</p>
                <p>各线路极速下载器通过p2p加速功能，帮助用户对于参考，请勿用参考，请勿用于参考，请勿用于商业用途，商业用途，于商业用途，大文件能更好的加速下载。</p>
                <p>其他普通下载点限制多线程，仅允许直参考，请勿用于商业用途，接点击或另存为下载.</p>
                <div>
                    <p>use, otherwise all the consequences will be produced.The speed downloader of each line
                    </p>
                    <p style="margin-bottom: 33px">
                        through P2P accelerates the function to help users to speed up dow
                    </p>
                    <div class="more"><a href="">MORE</a></div>
                    <div class="video">
                        <img src="../assets/img/view.jpg" alt="" style="width: 100%">
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default{
        name: 'index',
        data(){
            return {
                arr:[],
                brr:[],
                crr:[],
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                }
            }
        },
        created(){
           this.$http.get('/api/index/index').then(res=>{
               res.body.forEach((v,i)=> {
                   if(v.cid==2){
                       v.desc1=JSON.parse(v.desc1);
                       this.arr.push(v);
                   }else if(v.cid==4){
                       v.desc1=JSON.parse(v.desc1);
                       this.brr.push(v);
                   }else if(v.cid==3){
                       v.desc1=JSON.parse(v.desc1);
                       this.crr.push(v);
                   }
               })
               console.log(this.crr[0]);
           })
        },
        methods:{
          addcar(index){
              let obj={};
              obj.id=this.crr[index].id;
              this.$http.post('/api/index/index/addcar',obj,{
                  headers: {
                      "content-type": 'application/json'
                  }
              }).then(res=>{
                  if(res.body==='no'){
                      this.$message({
                          message: '请先登录',
                          type: 'success'
                      });
                  }else{
                      if (res.body==='ok') {
                          this.$message({
                              message: '添加成功',
                              type: 'success'
                          });
                      }else{
                          this.$message.error('添加失败')
                      }
                  }
              })
          }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>
<style scoped lang='scss'>
    .banner{
        width: 100%;
        height: 626px;
        margin: 0 auto;
        .swiper-slide{
            width: 100%;
            height: auto;
            position: relative;
            img{
                display: block;
                width: 100%;
            }
            div{
                position: absolute;
                right:0;
                left: 0;
                top:0;
                margin: 0 auto;
                width: 1200px;
                height: 100%;
                text-align: right;
                padding:175px 45px 150px 0;
                box-sizing: border-box;
                .b1{
                    font-size: 43px;
                    color: #bc829f;
                    margin-bottom: 27px;
                }
                .b2{
                    font-size: 43px;
                    color: #bc829f;
                    margin-bottom: 5px;
                }
                .b3{
                    color: #d099b7;
                    font-size: 24px;
                }
                .b4{
                    font-size: 10px;
                    color: #bba7ab;
                }
                .b5,.b6,.b7{
                    font-size: 5px;
                    color: #bba7ab;
                }
                .bg{
                    float: right;
                    width: 95px;
                    height: 29px;
                    text-align: center;
                    line-height: 29px;
                    border-radius: 15px;
                    color: #ff869d;
                    font-size: 13px;
                    background: #ffffff;
                    margin-top: 10px;
                    box-shadow: 0 3px 20px 2px #ffcdd7;
                }
            }
        }
    }
    section.classic{
        width: 1200px;
        height: auto;
        margin: 0 auto;
        padding: 0 160px;
        box-sizing: border-box;
        ul{
            width: 100%;
            height: auto;
            li{
                width: 100%;
                height: auto;
                .ctop{
                    height: 228px;
                    width: 100%;
                    text-align: center;
                    position: relative;
                    .ctimg{
                        width: auto;
                        height: auto;
                        position: absolute;
                        left:0;
                        right: 0;
                        top: -20px;
                        margin: 0 auto;
                        z-index: -1;
                    }
                    div{
                        width: 100%;
                        height: 100%;
                        padding:90px 0px;
                        box-sizing: border-box;
                        z-index: 999;
                        p:last-child{
                            font-size: 18px;
                        }
                    }
                }
                .cmid{
                    width: 100%;
                    height: auto;
                    padding:0 26px;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    div.cml,div.cmr{
                        width: 377px;
                        height: 416px;
                    }
                    .cml{
                        img{
                            display: block;
                            width: 100%;
                        }
                    }
                    .cmr{
                        padding: 37px 12px;
                        box-sizing: border-box;
                        .cmrt{
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 24px;
                            div:first-child{
                                p:first-child{
                                    font-size: 14px;
                                    font-weight: 500;
                                }
                                p:last-child{
                                    font-size: 9px;
                                    color: #cacaca;
                                }
                            }
                            div:last-child{
                                p{
                                    font-size: 9px;
                                    color: #ff3333;
                                    span{
                                        font-size: 24px;
                                    }
                                }
                            }
                        }
                        .cmrm{
                            margin-bottom: 36px;
                            h2{
                                font-size: 20px;
                                margin-bottom: 5px;
                            }
                            p{
                                color: #c2c2c2;
                            }
                            .p2{
                                font-size: 10px;
                                margin-bottom: 18px;
                            }
                        }
                        .cmrb{
                            width: 100%;
                            height: auto;
                            display: flex;
                            justify-content: flex-start;
                            .cb1{
                                width: 35px;
                                height: 35px;
                                border-radius: 50%;
                                background: #ff5a5a;
                                margin-right: 15px;
                                text-align: center;
                                line-height: 35px;
                            }
                            .cb2{
                                width: 35px;
                                height: 35px;
                                border-radius: 50%;
                                background: #7b7b7b;
                                text-align: center;
                                line-height: 35px;
                            }
                        }
                    }

                }
            }
            li:first-child{
                margin-bottom: 121px;
            }
            li:last-child{
                margin-bottom: 134px;
            }
        }

    }
    section.gg{
        width: 100%;
        height: 296px;
        margin-bottom: 65px;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        position: relative;
        .bb{
            width: 1200px;
            height: 55px;
            background: #ffffff;
            position: absolute;
            top:0;
            left:0;
            right:0;
            margin:  0 auto;
        }
        div{
            width: 33.333%;
            height: auto;
            img{
                display: block;
                width: 100%;
            }
        }
    }
    section.sweet{
        width: 1200px;
        height: auto;
        margin: 0 auto;
        .stop{
            height: 228px;
            width: 100%;
            text-align: center;
            position: relative;
            div{
                width: 100%;
                height: 100%;
                padding:85px 0px;
                box-sizing: border-box;
                p:last-child{
                    font-size: 18px;
                }
            }
            .stimg{
                width: auto;
                height: auto;
                position: absolute;
                left:0;
                right: 0;
                top: -20px;
                margin: 0 auto;
                z-index: -1;
            }
        }
        .smid{
            width: 100%;
            height: auto;
            margin-bottom: 45px;
            ul{
                width: 100%;
                height: auto;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                li:hover{
                    background: #fafafa;
                    box-shadow: 3px 3px 50px 10px #EBEBEB;
                }
                li{
                    width: 315px;
                    height: 412px;
                    margin-bottom: 22px;
                    padding:43px 38px 30px;
                    box-sizing: border-box;
                    div{
                        width: 100%;
                        height: auto;
                        img{
                            display: block;
                            width: 100%;
                        }
                    }
                    h3{
                        font-size: 20px;
                        margin-bottom: 5px;
                    }
                    .sp1{
                        font-size: 9px;
                        color: #a0a0a0;
                        margin-bottom: 17px;
                    }
                    .sp2{
                        font-size: 17px;
                        color: #ff3333;
                        span{
                            font-size: 10px;
                        }
                    }
                }

            }
        }
        .sbot{
            p{
                font-size: 9px;
                color: #b1b1b1;
                text-align: center;
            }
            div{
                margin-top: 15px;
                p{
                    font-size: 9px;
                    color: #b1b1b1;
                    text-align: center;
                }
                .more{
                    margin-top: 33px;
                    margin:0 auto;
                    width: 93px;
                    height: 27px;
                    border: 1px solid #ff6d8a;
                    border-radius: 15px;
                    line-height: 27px;
                    text-align: center;
                    a{
                        color: #ff6d8a;
                    }
                }
            }
        }
    }
    section.gg2{
        width: 1200px;
        height: auto;
        margin: 0 auto;
        display: flex;
        margin-top: 86px;
        display: flex;
        justify-content: center;
        div{
            width: auto;
            height: auto;
           display: flex;
            align-items: center;
            img{
                display: block;
                width: 100%;
            }
        }
    }
    section.girl{
        width: 1200px;
        height: auto;
        margin: 0 auto;
        .gtop{
            height: 228px;
            width: 100%;
            text-align: center;
            position: relative;
            div{
                width: 100%;
                height: 100%;
                padding:85px 0px;
                box-sizing: border-box;
                p:last-child{
                    font-size: 18px;
                }
            }
            .gtimg{
                width: auto;
                height: auto;
                position: absolute;
                left:0;
                right: 0;
                top: -20px;
                margin: 0 auto;
                z-index: -1;
            }
        }
        .gmid{
            width: 100%;
            height: auto;
            margin-bottom: 45px;
            ul{
                width: 100%;
                height: auto;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                li:hover{
                    background: #fafafa;
                    box-shadow: 3px 3px 50px 10px #EBEBEB;
                }
                li{
                    width: 315px;
                    height: 412px;
                    margin-bottom: 22px;
                    padding:43px 38px 30px;
                    box-sizing: border-box;
                    div{
                        width: 100%;
                        height: auto;
                        img{
                            display: block;
                            width: 100%;
                        }
                    }
                    h3{
                        font-size: 20px;
                        margin-bottom: 5px;
                    }
                    .sp1{
                        font-size: 9px;
                        color: #a0a0a0;
                        margin-bottom: 17px;
                    }
                    .sp2{
                        font-size: 17px;
                        color: #ff3333;
                        span{
                            font-size: 10px;
                        }
                    }
                }
            }
        }
        .gbot{
            p{
                font-size: 9px;
                color: #b1b1b1;
                text-align: center;
            }
            div{
                margin-top: 15px;
                p{
                    font-size: 9px;
                    color: #b1b1b1;
                    text-align: center;
                }
                .more{
                    margin-top: 33px;
                    margin:0 auto;
                    width: 93px;
                    height: 27px;
                    border: 1px solid #ff6d8a;
                    border-radius: 15px;
                    line-height: 27px;
                    text-align: center;
                    margin-bottom: 50px;
                    a{
                        color: #ff6d8a;
                    }
                }
                .video{
                    width: 100%;
                    height: 345px;
                }
            }
        }
    }
</style> 