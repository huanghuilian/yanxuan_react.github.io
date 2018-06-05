<template>
  <!--福利社-->
  <div class="m-sale">
    <a href="javascript:;"></a>
  </div>
</template>

<script>
  import {ReqFulishe} from '../../../api'
  export default {
    data(){
      return {
        saleIndexVO:{}
      }
    },
    async mounted(){
      const result = await ReqFulishe()
      if (result.code===0){
        this.saleIndexVO = result.data
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  /*福利社*/
  .m-sale
    width 10rem
    height 4rem
    margin-bottom (10/$unit)
    a
      display block
      width 100%
      height 100%
      background-image url("../../../common/imgs/fls.jpg")
      background-position center
      background-size cover
      background-repeat no-repeat
</style>
