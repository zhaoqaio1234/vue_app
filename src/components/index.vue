<template>
  <div>
    <!-- 头部区域 -->
   <div class="title">
     <Header></Header>
   </div>
   <!-- tab栏切换 -->
   <div class="tab-switch">
     <van-tabs v-model="active">
      <van-tab title="商品" to="/shop">
        <router-view></router-view>
      </van-tab>
      <van-tab title="评价" to="/evaluation">
      <router-view></router-view>
      </van-tab>
      <van-tab title="商家" to="/merchants">
      <router-view></router-view>
      </van-tab>
    </van-tabs>
   </div>
  </div>
</template>

<script>
import Header from '../components/header/header'
export default {
  data () {
    return {
      active: 0
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
</style>
