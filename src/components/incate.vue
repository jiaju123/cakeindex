<template>
    <div id="incate">
        <div class="banner">
            <img src="../assets/img/zybanner.jpg" alt="" style="width: 100%">
        </div>
        <div class="content">
            <div class="crumbs">
                <p>首页<small class="iconfont icon-sanjiaoxing-copy"></small><span>糖蜜系列</span></p>
            </div>
            <div class="border"></div>
        </div>
        <ul class="picture">
            <li v-for="(item,index) in arr">
                <router-link :to="'/xiangqing/'+item.id">
                    <div class="img">
                        <img :src="item.desc1[0].url" alt="" style="width: 100%">
                    </div>
                    <p>{{item.name}}</p>
                    <span>{{item.title1}}</span>
                </router-link>
                    <div class="price">
                        <p>{{item.pricen}}<span>RMB</span></p>
                        <button class="shop">立即购买</button>
                        <button class="car iconfont icon-cart-copy" @click="addcar(item.id)"></button>
                    </div>
                    <div class="bor"></div>
            </li>
            <!--<div class="page">-->
                <!--<el-pagination-->
                        <!--class="page"-->
                        <!--@current-change="handleCurrentChange"-->
                        <!--:current-page="currentPage"-->
                        <!--:page-size="size"-->
                        <!--layout="total , prev, pager, next, jumper"-->
                        <!--:total="total">-->
                <!--</el-pagination>-->
            <!--</div>-->
            <div class="video">
                <img src="../assets/img/view.jpg" alt="" style="width: 100%">
            </div>
        </ul>
    </div>
</template>
<script>
    import font from '../assets/font/font_zy/iconfont.css'
    export default{
        name: 'incate',
        data(){
            return {
                data: [],
                total: 0,
                currentPage: 1,
                size: 8,
                arr:[],
                count:0
            };
        },
        created(){
            this.$http.get("/api/index/incate").then(val =>{
                val.body.forEach((v,i)=>{
                    v.desc1=JSON.parse(v.desc1);
                    this.arr.push(v);
                })
                this.arr=val.body;
            })
        },
        methods:{
//            handleCurrentChange(val) {
//                this.$http.get('/api/index/incate/hot?nub=' + val + '&size=' + this.size).then(res => {
//                    let hot = [];
//                    res.body.forEach(val => {
//                        let aa = JSON.parse(val);
//                        aa.img = JSON.parse(aa.img);
//                        hot.push(aa);
//                    });
//                    this.data = hot;
//                    console.log(hot);
//                })
//            },
//            handleCommand(command) {
//                if (command == 'asc') {
//                    this.data.sort((a, b) => {
//                        return a.price - b.price
//                    })
//                } else {
//                    this.data.sort((a, b) => {
//                        return b.price - a.price
//                    })
//                }
//            },
            addcar(gid){
                let id=gid;
                let obj = {
                    gid:id
                };
                this.$http.post('/api/index/incate/addcar', obj, {
                    headers: {
                        "content-type": "application/json"
                    }
                }).then(res => {
                    if (res.body=='ok') {
                        this.$message({
                            message: '添加成功',
                            type: 'success'
                        });
                    }else{
                        this.$message.error('添加失败')
                    }
                })

            }
        }
    }
</script>
<style scoped lang='scss'>
    #incate{
        width: 100%;
        height: 100%;
        .banner{
            width: 100%;
            height: 258px;
        }
        .content{
            width: 1200px;
            height: auto;
            margin: 0 auto;
            .crumbs{
                width: 100%;
                height: 67px;
                p{
                    font-size: 12px;
                    color: #838383;
                    small{
                        font-size: 12px;
                        color: #000;
                        line-height: 67px;
                        margin: 0 5px;
                    }
                    span{
                        font-size: 12px;
                        color: #000;
                    }
                }
            }
            .border{
                width: 100%;
                height: 3px;
                background: -webkit-linear-gradient(left, #FFBB40,#FF9DBA); /* Safari 5.1 - 6.0 */
                background: -o-linear-gradient(right, #FFBB40,#FF9DBA); /* Opera 11.1 - 12.0 */
                background: -moz-linear-gradient(right,#FFBB40,#FF9DBA); /* Firefox 3.6 - 15 */
                background: linear-gradient(right, #FFBB40,#FF9DBA);
                margin-bottom: 20px;
            }
        }
        ul.picture{
            width: 1200px;
            height: auto;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            > li{
                width: 310px;
                height: 410px;
                padding: 50px 38px 0;
                float: left;
                box-sizing: border-box;
                position: relative;
                .img{
                    width: 233px;
                    height: 233px;
                    margin-bottom: 20px;
                }
                p{
                    font-size: 20px;
                    color:#000;
                }
                span{
                    font-size: 12px;
                    color:#555555;
                }
                .price{
                    margin-top: 8px;
                    p{
                        width: 90px;
                        font-size: 18px;
                        color:#FF3333;
                        float: left;
                        span{
                            font-size: 12px;
                            color: #FF3333;
                            font-weight: 700;
                            margin-left: 5px;
                        }
                    }
                    .shop{
                        width: 95px;
                        height: 30px;
                        box-sizing: border-box;
                        border:1px solid #fff;
                        background: #FF3735;
                        line-height: 28px;
                        font-size: 14px;
                        color:#ffffff;
                        float: left;
                        border-radius: 20px;
                        box-shadow: 0 5px 15px 2px #FAC4AF;
                        outline: none;
                        display: none;
                    }
                    .car{
                        width: 21px;
                        height: 21px;
                        box-sizing: border-box;
                        border:1px solid #fff;
                        background: #FF3735;
                        float: right;
                        margin: 7px 0 0 20px;
                        border-radius: 50%;
                        box-shadow: 0 3px 10px 1px #FAC4AF;
                        outline: none;
                        display: none;
                        font-size: 10px;
                        color: #fff;
                        text-align: center;
                        line-height: 18px;
                    }
                }
                .bor{
                    width: 100%;
                    height: 2px;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    background: -webkit-linear-gradient(right, #FF9DBA,#FFBB40); /* Safari 5.1 - 6.0 */
                    background: -o-linear-gradient(right, #FF9DBA,#FFBB40); /* Opera 11.1 - 12.0 */
                    background: -moz-linear-gradient(right,#FF9DBA,#FFBB40); /* Firefox 3.6 - 15 */
                    background: linear-gradient(right,#FF9DBA,#FFBB40);
                    display: none;
                }
            }
            > li:hover{
                background: #FAFAFA;
                box-shadow: 3px 3px 50px 10px #EBEBEB;
                .price{
                    .shop{
                        display: block;
                    }
                    .car{
                        display: block;
                    }
                }
                .bor{
                    display: block;
                }
            }
            .page{
                width: 315px;
                height: 20px;
                margin: 30px auto 70px;
                display: flex;
                justify-content: space-around;
                .next{
                    font-size: 14px;
                    color: #000;
                    border-bottom: 1px solid #000;
                }
                li.active{
                    font-weight: 600;
                    color:#FF4242;
                    border-bottom: 1px solid #FF4242;
                }
                li:hover{
                    font-weight: 600;
                    color:#FF4242;
                    border-bottom: 1px solid #FF4242;
                }
            }
            .video{
                width: 100%;
                height: 345px;
            }
        }
    }
</style> 