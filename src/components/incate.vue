<template>
    <div id="incate">
        <div class="banner"></div>
        <div class="content">
            <div class="crumbs"></div>
            <div class="border"></div>
        </div>
        <ul class="picture">
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>
<script>
    export default{
        name: 'incate',
        data(){
            return {

            }
        },
        created(){
            this.$http.get("/api/index/incate/cate").then(val =>{
                console.log(val);
            })
        }
    }
</script>
<style scoped lang='scss'>
    #incate{
        width: 100%;
        height: 100%;
        background: red;
        .banner{
            width: 100%;
            height: 258px;
            background: #ccc;
        }
        .content{
            width: 1200px;
            height: auto;
            background: #ccc;
            margin: 0 auto;
            .crumbs{
                width: 100%;
                height: 67px;
                background: red;
                borer-bottom:3px solid linear-gradient(right, #FFBB40,#FF9DBA);
            }
            /*.border{*/
                /*width: 100%;*/
                /*height: 3px;*/
                /*background: -webkit-linear-gradient(left, #FFBB40,#FF9DBA); !* Safari 5.1 - 6.0 *!*/
                /*background: -o-linear-gradient(right, #FFBB40,#FF9DBA); !* Opera 11.1 - 12.0 *!*/
                /*background: -moz-linear-gradient(right,#FFBB40,#FF9DBA); !* Firefox 3.6 - 15 *!*/
                /*background: linear-gradient(right, #FFBB40,#FF9DBA);*/
                /*margin-bottom: 10px;*/
            /*}*/
            .picture{
                width: 100%;
                height: auto;
                > li{
                    width: call(100 / 3);
                    height: 410px;
                    float: left;
                }
            }
        }
    }
</style> 