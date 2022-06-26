<template>
  <div class="app">
    <MyHeader />
    <MyGoods v-for="item in goodsList" :key="item.goods_id" :goods="item" />
    <MyFooter :goodsList="goodsList" />
  </div>
</template>

<script>
import MyHeader from '#/MyHeader'
import MyGoods from '#/MyGoods'
import MyFooter from '#/MyFooter'
import axios from 'axios'
export default {
  data() {
    return {
      goodsList: []
    }
  },
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  },
  async created() {
    const res = await axios({ url: '/api/cart' })
    this.goodsList = res.data.list
  }
}
</script>

<style>
.app {
  padding: 50px 0;
}
</style>
