<template>
    <div class="header">
        <van-card
          desc="美团专送/38分钟送达"
          title="乡村基（天府新谷店）"
          thumb="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=715429279,3086856035&fm=26&gp=0.jpg"
        >
        <!-- 标题区域 -->
          <template #title>
            <van-button size="mini">品牌</van-button>
            <span slot="title">乡村基（天府新谷店）</span>
          </template>
          <!-- 描述区域 -->
          <template #tags>
            <van-tag plain type="danger">减</van-tag>
            <span slot=tags>单人精彩套餐VC无限橙果汁全...</span>
          </template>
          <span slot="bottom">
              <van-tag>
                  <van-button size="mini">公告</van-button>
                  <span>尊敬的客观，端午攻略2：①6月1日当天在评价区分享...</span>
              </van-tag>
          </span>
        </van-card>
            </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.header {
    background: url('https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=715429279,3086856035&fm=26&gp=0.jpg');
}
</style>
