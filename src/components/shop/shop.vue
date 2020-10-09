<template>
    <div>
        <!-- 侧边导航区域 -->
        <div class="aside">
            <van-sidebar v-model="activeKey" @change="onChange">
            <van-sidebar-item title="迷你早餐" />
            <van-sidebar-item title="（冒菜）套餐自选区" />
            <van-sidebar-item title="撸烤串" />
        </van-sidebar>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeKey: 0
    }
  },
  methods: {
    onChange () {
    }
  }
}
</script>

<style lang="less" scoped>

</style>
