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
                <p>让人无法拒绝的魔方蛋糕</p>
                <p>魔方就像被赋予了生命一样</p>
                <div></div>
                <div class="count"></div>
                <div class="kouwei"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'xiangqing',
        data(){
            return {

            }
        },
        created(){
            let id= this.$route.params.id;
            this.$http.get('/api/index/xiangqing?'+id).then(res=>{
                console.log(res);
            })
        },
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
                width:582px;
                height:485px;
                float: left;
                img{
                    width:100%;
                }
            }
            .spright{
                width:600px;
                height:485px;
                float: right;

            }
        }
    }
</style> 