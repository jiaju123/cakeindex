<template>
  <div>
    <div class="bottom">
      <p class="p1">首页</p>
      <div><img src="../assets/img3/zxgr.png" height="13" width="20"/></div>
      <p class="p2">个人中心</p>
    </div>
    <div class="list">
      <div class="listleft">
        <div class="touxiang">
          <div class="touleft">
            <img src="../assets/img3/tou.png" height="77" width="78"/>

          </div>
          <div class="touright">
            <p class="p1">我是小班长</p>
            <p class="p2">VIP1</p>
          </div>
        </div>

        <div class="guanli">交易管理DINGDANFUWU</div>
        <ul class="list_lis" >
          <li v-for="item in brr">
            <router-link :to="item.to">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="listright">

        <ul class="title">
          <li class="tit1">产品信息</li>
          <li class="tit2">产品单价</li>
          <li class="tit2">产品数量</li>
          <li class="tit2">产品小计</li>
          <li class="tit2">订单状态</li>
          <li class="tit4">操作</li>
        </ul>
        <ul class="cont">
          <li v-for="">
            <div class="cont1">

              <div class="cont_img">
                <img src="../assets/img3/kk.png"/>
              </div>

              <div class="cont_text">
                <p class="p1">奶油慕斯蛋糕 是讨好味觉的 艺术【草莓口味】</p>
                <p class="p2">三种口味</p>
              </div>
            </div>
            <div class="cont2">299</div>
            <div class="cont2">2</div>
            <div class="cont2">578</div>
            <div class="cont3">
              <div class="cont3_a">
                <img src="../assets/img3/qq .png"/>
              </div>
              <p class="p4">运送中</p>
            </div>
            <div class="cont4">
              <div class="cont4_a">

                <button class="input"></button>
                <img src="../assets/img3/tt.png" height="51" width="120"/>
              </div>
            </div>
          </li>
          <li v-for="">
            <div class="cont1">

              <div class="cont_img">
                <img src="../assets/img3/kk.png"/>
              </div>

              <div class="cont_text">
                <p class="p1">奶油慕斯蛋糕 是讨好味觉的 艺术【草莓口味】</p>
                <p class="p2">三种口味</p>
              </div>
            </div>
            <div class="cont2">299</div>
            <div class="cont2">2</div>
            <div class="cont2">578</div>
            <div class="cont3">
              <div class="cont3_a">
                <img src="../assets/img3/qq .png"/>
              </div>
              <p class="p4">运送中</p>
            </div>
            <div class="cont4">
              <div class="cont4_a">

                <button class="input"></button>
                <img src="../assets/img3/tt.png" height="51" width="120"/>
              </div>
            </div>
          </li>
          <li v-for="">
            <div class="cont1">

              <div class="cont_img">
                <img src="../assets/img3/kk.png"/>
              </div>

              <div class="cont_text">
                <p class="p1">奶油慕斯蛋糕 是讨好味觉的 艺术【草莓口味】</p>
                <p class="p2">三种口味</p>
              </div>
            </div>
            <div class="cont2">299</div>
            <div class="cont2">2</div>
            <div class="cont2">578</div>
            <div class="cont3">
              <div class="cont3_a">
                <img src="../assets/img3/qq .png"/>
              </div>
              <p class="p4">运送中</p>
            </div>
            <div class="cont4">
              <div class="cont4_a">

                <button class="input"></button>
                <img src="../assets/img3/tt.png" height="51" width="120"/>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="fen">
      <div class="fenbox">
        <el-pagination
          layout="prev, pager, next"
          :total="50">
        </el-pagination>

      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'indexcar',
    data(){
      return {
        brr:[
          {name:'我丨的丨订丨单',to:'/indexcar',id:''},
          {name:'我丨的丨购丨物丨车',to:'/incar',id:''},
        ],
        drr:[],
        created(){
          this.$http.get("/api/index/orders").then(res=>{
            console.log(res);
            this.tableData=res.body;
          })
        },
      }

    }

  }
</script>
<style scoped lang='scss'>
  .fen{
    width: 1200px;
    height: 280px;
    margin: 0 auto;
    padding-top: 102px;
    padding-left: 850px;
    box-sizing: border-box;
    .fenbox{
      width: 100%;
      height: 35px;
    }

  }

  .bottom{
    width: 1200px;
    height: 120px;
    padding-top: 46px;
    box-sizing: border-box;
    background: #ffffff;
    margin: 0 auto;
    display: flex;
    p{
      font-size: 13px;

    }
  }
  .list{
    width: 1200px;
    height: auto;
    margin: auto;
    display: flex;

    .listleft{
      width: 300px;
      height: auto;
      border: 2px solid #ccc;
      border-radius: 10px;
      .touxiang{
        width: 100%;
        height: 180px;

        display: flex;
        padding-left: 10px;
        padding-top: 28px;
        box-sizing: border-box;
        .touleft{
          width: 77px;
          height: 77px;
          border-radius: 50%;
          background: #333;
          border-shadow:1px,1px,1px,#ccc;
          img{
            width: 100%;

          }
        }
        .touright{
          width: 80px;
          height: 77px;
          padding-left: 6px;
          padding-top: 24px;
          box-sizing: border-box;
          p{
            font-size:11px ;
          }
          .p1{
            font-weight: bold;
          }
        }
      }
      .guanli{
        width: 200px;
        height: 40px;
        padding-left: 28px;
        background: #ffb2b2;
        border: 1px solid #ffdbdb;
        box-sizing: border-box;
        font-size: 11px;
        line-height: 40px;
        color: #fff;
      }
      .list_lis{
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding-top: 14px;
        padding-bottom: 34px;
        li{
          width: 100%;
          height: 34px;
          padding-left: 28px;
          box-sizing: border-box;
          a{
            display: block;
            font-size: 14px;
            color: #333;
            line-height: 24px;
          }
        }
      }
    }
    .listright{
      width: 100%;
      height: auto;
      .ding{
        width: 898px;
        height: 52px;
        display: flex;
        li{
          width: 116px;
          height: 100%;
          line-height: 50px;
          font-size: 18px;
          text-align: center;
          a{
            display: block;
            color: #333;
          }
        }
      }
      .title{
        width: 100%;
        height: 59px;
        background: #f6fbf1;
        text-align: center;
        line-height: 59px;
        display: flex;
        padding-left: 30px;
        box-sizing: border-box;
        .tit1{
          width: 256px;
          height: 100%;
        }
        .tit2{
          width: 133px;
          height: 100%;
        }

        .tit4{
          width: 149px;
          height: 100%;
        }
      }
      .cont{
        width: 100%;
        height: auto;

        li{
          width: 100%;
          height: 182px;
          padding-top: 37px;
          box-sizing: border-box;
          padding-left: 30px;
          display: flex;
          border-bottom:1px solid #ccc ;
          color: #333333;
          .cont1{
            width: 265px;
            height: 103px;
            display: flex;
            .cont_img{
              width: 93px;
              height: 103px;
              background: yellow;



            }

            .cont_text{
              width: 172px;
              height: 100%;

              padding-left:48px;
              padding-right: 20px;
              box-sizing: border-box;
              .p1{
                width: auto;
                height:78px ;
                font-size: 14px;
                color: #333;
                font-weight: bold;

              }
              .p2{
                width:auto;
                height:25px ;
                font-size: 15px;
                line-height:25px ;
                color: #7d7d7d;
              }
            }
          }
          .cont2{
            width: 133px;
            height: 103px;
            text-align: center;
            line-height: 103px;
            color: #414141;
          }
          .cont3{
            width: 133px;
            height: 100%;
            padding-top: 20px;
            box-sizing: border-box;
            .cont3_a{
              margin: auto;
              height:30px;
              width:42px;
              +img{
                width: 100%;
              }

            }

            .p4{
              margin-top: 10px;
              font-size: 12px;
              text-align: center;

            }
          }
          .cont4{
            width: 149px;
            height:100%;
            padding-top: 20px;
            box-sizing: border-box;

            .cont4_a{
              height:50px;
              width:120px;
              position: relative;

              +img{
                width: 100%;
              }
              .input{
               top:0;
                height:50px;
                width:120px;
                background: none;
                border: none;

                position: absolute;

              }
            }




          }
        }
      }
    }
  }


</style>
