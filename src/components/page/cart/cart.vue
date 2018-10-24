<template>
    <div class="cart">
        <div class="cars">
            <!-- <mt-radio></mt-radio> -->
            <mt-cell title="居家百货专营店">
                <span>编辑</span>
                <input type="checkbox" value="test" name="btn" slot="icon">
            </mt-cell>
            <ul class="good">
                <li>
                    <input type="checkbox" >
                    <a href=""><img src="" alt=""></a>
                    
                </li>
            </ul>

        </div>
        <!-- 点击删除弹出窗口 -->
        <!-- <mt-popup
            v-model="popupVisible"
            position="bottom">
        </mt-popup> -->
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.cart{
    .mint-cell{
        text-align:left;
    }
}
</style>

