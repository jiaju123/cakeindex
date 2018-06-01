<template>
    <div id="xiangqing">
        <div class="banner">
            <img src="../assets/img/zybanner.jpg" alt="" style="width: 100%">
        </div>
        <div class="content">
            <div class="crumbs">
                <p>首页<small class="iconfont icon-sanjiaoxing-copy"></small><span>糖蜜系列</span><small class="iconfont icon-sanjiaoxing-copy"></small><span>商品详情</span></p>
            </div>
            <div class="border"></div>
        </div>
        <div class="sp">
            <div class="spleft">
                <img src="../assets/img/zy5.jpg" alt="">
            </div>
            <div class="spright">
                <p class="p1">{{arr.title2}}</p>
                <p class="p2">{{arr.title3}}</p>
                <div>{{arr.pricen}}<span>RMB</span><span class="yuanjia">原价</span>{{arr.priceo}}<span class="rmb">RMB</span></div>
                <div class="count">请选择商品数量：
                    <span class="jia" @click="add">+</span>
                    <span>{{count}}</span>
                    <span class="jian" @click="red">-</span>
                </div>
                <ul class="kouwei" ref="xxx">
                    <p class="p3">请选择商品口味：</p>
                    <li class="kouweibox"  @click="aa($event)">{{brr[0].kouwei}}</li>
                    <li class="kouweibox"  @click="aa($event)">{{brr[1].kouwei}}</li>
                    <li class="kouweibox"  @click="aa($event)">{{brr[2].kouwei}}</li>
                </ul>
                <div class="addcar" @click="addcar">
                    加入购物车
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'xiangqing',
        data(){
            return {
                arr:{},
                brr:[
                    {id:'a1',kouwei:''},
                    {id:'a2',kouwei:''},
                    {id:'a3',kouwei:''}
                ],
                count:1
            }
        },
        created(){
            let id= this.$route.params.id;
            this.$http.get('/api/index/xiangqing?id='+id).then(res=>{
                this.arr.title2=res.data[0].title2;
                this.arr.title3=res.data[0].title3;
                this.arr.pricen=res.data[0].pricen;
                this.arr.priceo=res.data[0].priceo;
                this.brr[0].kouwei=res.data[0].taste1;
                this.brr[1].kouwei=res.data[0].taste2;
                this.brr[2].kouwei=res.data[0].taste3
            })
        },
        methods:{
            add(){
                this.count++;
            },
            red(){
                this.count--;
            },
            aa(e){
                let lib=this.$refs.xxx.querySelectorAll('li');
                lib.forEach(val=>{
                    val.classList.remove('active');
                    e.target.classList.add('active');
                })
            },
            addcar(){
                let lib=this.$refs.xxx.querySelector('li.active');
                let obj={};
                obj.id=this.$route.params.id;
                obj.text=lib.innerHTML;
                obj.count=this.count;
                this.$http.post('/api/index/xiangqing/xinxi',obj,{headers:{"content-type":'application/json'}}).then(res=>{
                    console.log(res.body);
                    if(res.body==='ok'){
                        alert('成功!');
                    }
                })
            }
        }

    }
</script>
<style scoped lang='scss'>
    #xiangqing {
        width: 100%;
        height: 100%;
        .banner {
            width: 100%;
            height: 258px;
        }
        .content {
            width: 1200px;
            height: auto;
            margin: 0 auto;
            .crumbs {
                width: 100%;
                height: 67px;
                p {
                    font-size: 12px;
                    color: #838383;
                    small {
                        font-size: 12px;
                        color: #000;
                        line-height: 67px;
                        margin: 0 5px;
                    }
                    span {
                        font-size: 12px;
                        color: #000;
                    }
                }
            }
            .border {
                width: 100%;
                height: 3px;
                background: -webkit-linear-gradient(left, #FFBB40, #FF9DBA); /* Safari 5.1 - 6.0 */
                background: -o-linear-gradient(right, #FFBB40, #FF9DBA); /* Opera 11.1 - 12.0 */
                background: -moz-linear-gradient(right, #FFBB40, #FF9DBA); /* Firefox 3.6 - 15 */
                background: linear-gradient(right, #FFBB40, #FF9DBA);
                margin-bottom: 20px;
            }
        }
        .sp{
            width:1200px;
            height:650px;
            margin: 0 auto;
            .spleft{
                width:482px;
                height:385px;
                float: left;
                margin-top: 100px;
                margin-left: 50px;
                img{
                    width:100%;
                }
            }
            .spright{
                width:600px;
                height:485px;
                float: right;
                .p1{
                    font-size: 22px;
                    margin-top: 120px;
                };
                .p2{
                    font-size: 15px;
                    margin-top: 15px;
                }
                div{
                    font-size: 33px;
                    margin-top: 42px;
                }
                .yuanjia{
                    font-size: 14px;
                }
                .rmb{
                    font-size:10px;
                }
                span{
                    margin-left: 10px;
                }
                .count{
                    margin-top: 54px;
                    font-size: 15px;
                    color:#737373;
                }
                ul{
                    color:#7d7d7d;
                    margin-top: 20px;
                    li{
                        width:100px;
                        float: left;
                        border:1px solid #7d7d7d;
                        text-align: center;
                        padding: 5px 0;
                        margin:10px 5px 0;
                    }
                    li.active{
                        background: red;
                        color:white;
                    }
                };
                .addcar{
                    width:199px;
                    height:49px;
                    text-align: center;
                    line-height: 50px;
                    font-size: 16px;
                    background: red;
                    color:white;
                    border-radius: 10px;
                    margin-top: 70px;
                }
            }
        }
    }
</style> 