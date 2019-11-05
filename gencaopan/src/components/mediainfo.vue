<template>
  <div class="page-group">
        <div class="page"> 
            <div class="content"> 
                <div class="list">
                    <div class="imgs"><img src="../img/132.jpg" class="img"></div>
                    <div class="count">
                        <p>灰太狼</p>
                        <p class="count_c"><span>0</span>篇笔记&nbsp;被打赏<span>0元</span></p>
                    </div>
                    <div class="guanzhu">
                        <div class="m-concern">已关注</div> 
                    </div>
                </div>
                <div style="height:6px;background-color:#f2f2f2;"></div>
                <div class="note-content"> 
                    <div class="media-info-box"> 
                        <div class="media-info-title">约翰一墨菲的资金管理要领和交易策略举要</div> 
                        <div class="media-info-mt"><span class="f-r">2017/08/01 16:59:19</span></div> 
                    </div>
                    <div class="media-info-content contentArea" style="font-size: 16px;">      
                        一资本市场的高额利润应来的辉煌中。这也是多数人易现辉煌，难有成就的根本原因。<br />
    　　                    重仓和频繁交易导致成绩巨幅震荡是业余低手的表现，且两者相互作用，互为因果。坚忍，耐心，信心并顽强执着地积累成功才是职业的交易态度。<br />
                    　　能大的成绩，而成绩如何其中相当习惯----融会贯通----忘记----大成。<br />
                    　　小钱靠技术（聪明），大钱靠意志（智慧）。长线（智慧）判方向，短线）。<br />
                        方法和不断完善的性格修炼。<br />
                        大自然本身是由规律性和大部分随机性组成，任何想完全，彻底，精确地之一，“谋事在人，成事在天。”，于人我们讲是缘分而非最好，于事我们讲究适应，能改变的是自己而非寄予外界提供。<br />
                        <br />
                    　　利利润的获得都是承担一定风险才能获取的回报，只要交易思想正确，对于应该承担的风险我们要从容不迫。<br />
                    　　正确分析预测只是成功投资的第一步，成功投资的基础更需要严格的风险管理。<br />
                    　　心理控制第一，风险管理第二，分析技能重要性最次。<br />
                    　　必须在交易中交易在无欲的状态下才能更多收获，做好该做的而不是最想做的。市场不是你寻求刺激的场所，也不是你的取款机器。<br />
                    　　任何的事物，对他的定义执行，这样才能保证成功率。<br />
                        <br />
                    　　盯住止损（止赢），止损（止赢）是自己控制的（谋事在人）；不考虑利润，因为利润是由市场控制的（成事在天）！<br />
                    　　减少无谓的交易，你离成功就更加接近了（转帖）减少无谓的交易，你离成功就更加接近了<br />
                    　　当市场处目前该买或卖，我总是说："目前没有交易价值"，我一般的回利是市场上普遍的行为，我把这些交易总结为：无谓的交易。<br />
                        <br />
                    　　尽量减少无谓的交易，你离成功就更加接近了。<br />
                    　　无谓的交易是导致亏损和心态不好的主要原因，也是养成控，专业交易是尽量减少或避免交易的随意性的。<br />
                    　　什么是无谓的交易呢？简单来讲就是没有价值的交易润和相应承担任何时<br>
                        <div class="imgs">
                            <img src="../img/1501577959302.jpg" class="img">
                        </div>
                    </div>  
                </div> 
            </div>
        </div>
        <div style="height:50px;"></div> 
  </div>
</template>

<script>
export default {
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#f2f2f2')
    },
    beforeDestroy () {
        document.querySelector('body').removeAttribute('style')
    },
    data(){
        return{

        }
    }
}
</script>

<style lang="less" scoped="scoped">
    .list{
        display: flex;
        padding: 12px 0;
        background-color: #fff;
        .imgs{
            width: 15%;
            text-align: center;
            .img{
                width: 35px;
                height: 35px;
            }
        }
        .count{
            width: 60%;
            .count_c{
                font-size: 12px;
                line-height: 18px;
                color: rgb(160, 156, 156);
            }
        }
        .guanzhu{
            width: 20%;
            // padding-right: 8px;
            margin-top: 6px;
            .m-concern{
                font-size: 12px;
                color: #ccc;
                border: 1px solid #ccc;
                text-align: center;
                padding: 5px;
                border-radius: 15px;
            }
        }
    }
    .note-content{
        background-color: #fff;
        padding: 5px 0;
        .media-info-box{
            padding: 15px 0;
            .media-info-title{
                font-size: 18px;
                font-weight: bold;
                border-left: 4px solid red;
                line-height: 24px;
                padding-left: 5px;
            }
            .media-info-mt{
                padding-left: 8px;
                .f-r{
                    font-size: 12px;
                    color: #ccc;
                }
            }
        }
        .media-info-content{
            padding: 10px;
            border-top: 1px solid rgba(235, 223, 223, 0.3);
            .imgs{
                padding: 5px 0;
                .img{
                    width: 100%;
                }
            }
        }
    }
</style>