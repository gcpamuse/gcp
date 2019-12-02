<template>
<div class="mybook"> 
    <table class="table-m2 mt10" cellspacing="0"> 
        <thead> 
            <tr> 
                <th>导师</th> 
                <th>导师收益</th> 
                <th>订阅时间</th> 
                <th>状态</th> 
                <th>操作</th> 
            </tr> 
        </thead> 
        <tbody id="teacherList"> 
            <tr>
                <td style="text-align:left;padding-left:.5rem">
                    <a data-ajax="false" class="" href="">
                        <span class="daoshi_shou" style="font-size:.700rem;">收</span>
                        灰太狼
                        <!-- <span class="daoshi_shou" style="font-size:.700rem;">免</span> -->
                    </a>
                </td>
                
                <td>
                    <span style="color:red;">+</span>
                    <!-- <span style="color:green;">-</span> -->
                </td>
                <td style="font-size:12px">
                    2019-9-26<br/>
                    2019-9-27
                </td>
                <td><a class="callof" data-ajax="false" href="">续订</a></td>
                <td><a href="javascript:;" data-ajax="false" onclick="teacherSth()">移除</a></td>
            </tr>


            <!-- <li>您还没有订阅任何导师的信号哦！</li> -->
        </tbody> 
    </table> 
</div> 
	
</template>

<script>

export default {
    
}
</script>

<style lang="less" scoped="scoped">
.table-m2{  
    width: 100%; 
}
.table-m2 thead tr th,
.table-m2 tbody tr td{ 
    padding: .5rem 0; 
    text-align: center; 
    color: #666; 
    line-height: 1.42857143; 
    vertical-align:middle; 
    font-size:.750rem; 
    font-weight:100;
}
.table-m2 thead tr th{ 
    border-bottom:solid 1px #eee; 
    font-weight: 600;
}
.table-m2 tbody tr td{ 
    border-bottom: dashed 1px #eee; 
}
.table-m2 tbody tr:last-child td{ 
    border-bottom: none; 
}
.mybook .table-m2 a{ 
    color: #666; 
    font-weight: normal; 
}
</style>
